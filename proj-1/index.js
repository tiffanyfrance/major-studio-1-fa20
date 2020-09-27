const margin = { top: 25, right: 20, bottom: 35, left: 40 };
const width = 900;
const height = 600;

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
let circles;

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

    d.x = x(d.ratio);
    d.y = centerY;
  }

  topics.sort((a, b) => a.ratio - b.ratio);

  data = topics;

  xAxis = g => g.call(d3.axisBottom(x).ticks(width / 80));

  circles = svg.append('g');

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', margin.left)
    .attr('height', height)
    .attr('fill', 'white');

  xAxisG = svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`);

  updateGraph();
})();

function updateGraph() {
  const t = svg.transition()
    .duration(250);

  xAxisG.transition(t)
    .call(xAxis);

  let node = circles.selectAll('circle')
    .data(data, d => d.id)
    .enter().append('circle')
    .attr('stroke', 'none')
    .attr('fill', 'black')
    .attr('r', 4)
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

  const radius = 4 + 1;

  d3.forceSimulation(data)
    .force('x', d3.forceX(d => x(d.ratio)))
    .force('y', d3.forceY(centerY))
    .force('collide', d3.forceCollide().radius(d => radius))
    .on('tick', tickActions);

  function tickActions() {
    node
      .attr('cx', d => {
        d.x = Math.max(xRange[0] + radius, Math.min(xRange[1] - radius, d.x));
        return d.x;
      })
      .attr('cy', d => d.y);
  }
}