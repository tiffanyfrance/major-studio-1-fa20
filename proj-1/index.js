const margin = { top: 25, right: 40, bottom: 35, left: 40 };
const width = 900;
const height = 350;

const svg = d3.select('body').append('svg')
  .attr('viewBox', [0, 0, width, height]);

const tooltip = d3.select('body').append('div')
  .attr('class', 'svg-tooltip');

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

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', margin.left)
    .attr('height', height)
    .attr('fill', 'white');

  xAxisG = svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`);

  const t = svg.transition()
    .duration(250);

  xAxisG.transition(t)
    .call(xAxis);

  let r = d3.scaleLinear()
    .domain(d3.extent(data, d => d.selectedCount))
    .range([10, 50]);

  let node = svg.append('g')
    .selectAll('circle')
    .data(data, d => d.id)
    .enter().append('circle')
    .attr('stroke', 'none')
    .attr('fill', d => {
      //5F2756
      //A83A55
      //E14B56
      //F76F55
      //F8A255
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
    .attr('r', d => r(d.selectedCount))
    .style('opacity', 1)
    // .on('mouseover', () => tooltip.style('visibility', 'visible'))
    .on('mousemove', function (e, d) {
      console.log(d.topic, d.ratio);

      // let left = null
      // let right = null;

      // if (e.offsetX < width / 2) {
      //   left = (e.pageX + 10) + 'px';
      // } else {
      //   let bodyMarginRight = parseInt(window.getComputedStyle(document.body).marginRight);
      //   let tooltipPaddingRight = parseInt(window.getComputedStyle(tooltip.node()).paddingRight);
      //   right = (document.body.clientWidth - e.pageX + bodyMarginRight + tooltipPaddingRight + 10) + 'px';
      // }

      // tooltip
      //   .style('top', (e.pageY - 10) + 'px')
      //   .style('left', left)
      //   .style('right', right)
      //   .html(`Title: ${d.title}<br>Year: ${d.publicationYear}<br>Rating: ${d.avgRating}`);
    })
  // .on('mouseout', () => tooltip.style('visibility', 'hidden')),

  const spacing = 4;

  d3.forceSimulation(data)
    .force('x', d3.forceX(d => x(d.ratio)))
    .force('y', d3.forceY(centerY))
    .force('collide', d3.forceCollide().radius(d => r(d.selectedCount) + spacing))
    .on('tick', tickActions);

  function tickActions() {
    node
      .attr('cx', d => {
        let radius = r(d.selectedCount) + spacing;
        d.x = Math.max(xRange[0] + radius, Math.min(xRange[1] - radius, d.x));
        return d.x;
      })
      .attr('cy', d => d.y);
  }
})();
