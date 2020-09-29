const margin = { top: 25, right: 40, bottom: 35, left: 40 };
const width = 900;
const height = 380;

const svg = d3.select('body').append('svg')
  .attr('viewBox', [0, 0, width, height]);

const tooltip = d3.select('body').append('div')
  .attr('class', 'tooltip');

let data;

let xRange = [margin.left, width - margin.right];
let x = d3.scaleLinear()
  .domain([0, 1])
  .range(xRange);

let centerY = (height - margin.bottom + margin.top) / 2;

let xAxis;
let xAxisG;

(async () => {
  let response = await fetch('topic-count.json');
  let { totals, topics } = await response.json();

  let selectedWomen = ['mary', 'elizabeth', 'anna'];
  let selectedMen = ['james', 'john', 'william'];

  for (let d of topics) {
    let womenCount = 0;
    let womenTotal = 0;

    for (let w of selectedWomen) {
      womenCount += d[w];
      womenTotal += totals[w];
    }

    d.womenPercent = womenCount / womenTotal;

    let menCount = 0;
    let menTotal = 0;

    for (let w of selectedMen) {
      menCount += d[w];
      menTotal += totals[w];
    }

    d.menPercent = menCount / menTotal;

    d.ratio = d.menPercent / (d.womenPercent + d.menPercent);

    d.selectedCount = womenCount + menCount;

    d.x = x(d.ratio);
    d.y = centerY;
  }

  topics.sort((a, b) => a.ratio - b.ratio);

  data = topics;

  xAxis = g => g.call(d3.axisBottom(x).ticks(width / 80));

  xAxisG = svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`);

  const t = svg.transition()
    .duration(250);

  // xAxisG.transition(t)
  //   .call(xAxis);

  let r = d3.scaleLinear()
    .domain(d3.extent(data, d => d.selectedCount))
    .range([13, 50]);

  let node = svg.selectAll('.node')
    .data(data, d => d.id)
    .enter()
    .append('g')
    .attr('class', 'node')
    // .on('mouseover', () => tooltip.style('visibility', 'visible'))
    .on('mouseover', function (e, d) {
      console.log(d.topic, d.ratio);

      this.parentNode.parentNode.appendChild(this.parentNode);
      this.parentNode.parentNode.parentNode.appendChild(this.parentNode.parentNode);

      d3.select(this)
        .append('circle')
        .attr('class', 'hover-circle')
        .attr('r', d => r(d.selectedCount) + 3)
        .style('fill', 'none')
        .style('stroke','#999')
        .style('stroke-width', 0.5)
        .attr('stroke-dasharray', 2);
  
      tooltip.transition()		
        .duration(200)		
        .style("opacity", 0.9);		
      
      tooltip.html(`<div>${d.topic.toLowerCase()}</div>`)	
        .style("left", (e.pageX) + "px")		
        .style("top", (e.pageY + 8) + "px");	
            				
        
    })
  .on("mouseout", function(d) {		

    d3.select('.hover-circle')
      .remove();

    tooltip.transition()		
        .duration(500)		
        .style("opacity", 0);	
});

  let circle = node.append('circle')
    .attr('stroke', 'none')
    .attr('fill', d => {
      if (d.ratio < (1 / 3)) { // > 67% female, exclusively or nearly exclusively by females
        return '#5F2756';
      } else if (d.ratio < (1 / 3) + (1 / 9)) { // maj female, 56%-66% female
        return '#A83A55';
      } else if (d.ratio < (1 / 3) + (2 / 9)) { // equal 44-55%
        return '#E14B56';
      } else if (d.ratio < (2 / 3)) { // maj male 56%
        return '#F76F55';
      } else { // > 67% male, exclusively or nearly exclusively by males
        return '#F8A255';
      }
    })
    .attr('r', d => r(d.selectedCount))
    .style('opacity', 1);

  let text = node.append('foreignObject')
    .html(d => `<div>${(d.topic).toLowerCase()}</div>`)
    .attr('class', 'topic')
    .attr('text-anchor', 'start')
    .style('font-size', d => (0.35 * r(d.selectedCount)) + 'px')
    .style('color', 'white')
    .style('width', d => r(d.selectedCount) + 20)
    .style('height', 25)
    .style('text-align', 'center')
    .style('font-weight', '500')
    .style('-webkit-text-stroke-width', 0.2)
    .style('-webkit-text-stroke-color', d => {
      if (d.ratio < (1 / 3)) {
        return '#5F2756';
      } else if (d.ratio < (1 / 3) + (1 / 9)) {
        return '#A83A55';
      } else if (d.ratio < (1 / 3) + (2 / 9)) {
        return '#E14B56';
      } else if (d.ratio < (2 / 3)) {
        return '#F76F55';
      } else {
        return '#F8A255';
      }
    })

  const spacing = 4;

  let simulation = d3.forceSimulation(data)
    .force('x', d3.forceX(d => x(d.ratio)))
    .force('y', d3.forceY(centerY))
    .force('collide', d3.forceCollide().radius(d => r(d.selectedCount) + spacing))
    .on('tick', tickActions)
    .stop();

  for (let i = 0; i < 100; ++i) simulation.tick();

  simulation.restart();

  function tickActions() {
    node.attr('transform', d => {
      let radius = r(d.selectedCount) + spacing;
      d.x = Math.max(xRange[0] + radius, Math.min(xRange[1] - radius, d.x));
      return `translate(${d.x}, ${d.y})`;
    })
  }

  setTimeout(() => {
    text
      .style('transform', function (d) {
        let halfWidth = Number.parseFloat(this.style.width) / 2;
        let height = Number.parseFloat(window.getComputedStyle(this.querySelector('div')).height)
        let halfHeight = (height / 2) + (height * 0.05);

        return `translate(-${halfWidth}px, -${halfHeight}px)`;
      })
      .style('opacity', 1);

    svg.append('line')          
      .style('stroke', '#999')  
      .attr('x1', 130)
      .attr('y1', 263)
      .attr('x2', 130)
      .attr('y2', 338)
      .attr('stroke-width', '0.5')
      .attr('stroke-dasharray', 2)
    
    svg.append('foreignObject')
      .html(d => `<div style="border-left: solid 2px #5F2756;">
      <div style="padding-left: 5px">indicates tags that are primarily or solely female</div></div>`)
      .attr('class', 'callout')
      .attr('width', 100)
      .attr('height', 20)
      .attr('x', 130)
      .attr('y', 320);
    
    svg.append('line')          
      .style('stroke', '#999')  
      .attr('x1', 343)
      .attr('y1', 220)
      .attr('x2', 343)
      .attr('y2', 320)
      .attr('stroke-width', '0.5')
      .attr('stroke-dasharray', 2)
    
    svg.append('foreignObject')
      .html(d => `<div style="border-left: solid 2px #E14B56;">
      <div style="padding-left: 5px">indicates tags that are equally female/male</div></div>`)
      .attr('class', 'callout')
      .attr('width', 100)
      .attr('height', 20)
      .attr('x', 343)
      .attr('y', 300);
    
    svg.append('line')          
      .style('stroke', '#999')  
      .attr('x1', 308)
      .attr('y1', 168)
      .attr('x2', 308)
      .attr('y2', 65)
      .attr('stroke-width', '0.5')
      .attr('stroke-dasharray', 2)
    
    svg.append('foreignObject')
      .html(d => `<div style="border-left: solid 2px #A83A55;">
      <div style="padding-left: 5px">indicates tags that are majority female</div></div>`)
      .attr('class', 'callout')
      .attr('width', 100)
      .attr('height', 20)
      .attr('x', 308)
      .attr('y', 65);
    
      svg.append('line')          
      .style('stroke', '#999')  
      .attr('x1', 593)
      .attr('y1', 90)
      .attr('x2', 593)
      .attr('y2', 32)
      .attr('stroke-width', '0.5')
      .attr('stroke-dasharray', 2)
    
    svg.append('foreignObject')
      .html(d => `<div style="border-left: solid 2px #A83A55;">
      <div style="padding-left: 5px">indicates tags that are majority male</div></div>`)
      .attr('class', 'callout')
      .attr('width', 100)
      .attr('height', 20)
      .attr('x', 593)
      .attr('y', 35);

    svg.append('line')          
      .style('stroke', '#999')  
      .attr('x1', 555)
      .attr('y1', 265)
      .attr('x2', 555)
      .attr('y2', 335)
      .attr('stroke-width', '0.5')
      .attr('stroke-dasharray', 2)
    
    svg.append('foreignObject')
      .html(d => `<div style="border-left: solid 2px #A83A55;">
      <div style="padding-left: 5px">indicates tags that are primarily or solely male</div></div>`)
      .attr('class', 'callout')
      .attr('width', 100)
      .attr('height', 20)
      .attr('x', 555)
      .attr('y', 317);

    svg.append('foreignObject')
      .html(d => `<div style="font-size: 8px;">* includes the 50 most popular tags for each gender<br>
      * size of circle represents popularity of tag with a minimum 13px radius</div>`)
      .attr('width', 300)
      .attr('height', 100)
      .attr('x', 623)
      .attr('y', 355);

  }, 2000);
})();
