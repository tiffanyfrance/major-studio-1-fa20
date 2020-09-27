const margin = { top: 25, right: 20, bottom: 35, left: 40 };
const width = 900;
const height = 600;

const svg = d3.select('body').append('svg')
  .attr('viewBox', [0, 0, width, height]);

const tooltip = d3.select('body').append('div')
  .attr('class', 'svg-tooltip');

let data;
let x;
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
  }

  topics.sort((a, b) => a.ratio - b.ratio);

  data = topics;

  x = d3.scaleLinear()
    .domain([0, 1])
    .range([margin.left, width - margin.right]);

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

  svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .selectAll('text')
    .data(data);
})();

function updateGraph() {
  const t = svg.transition()
    .duration(250);

  xAxisG.transition(t)
    .call(xAxis);

  let simulation = d3.forceSimulation(data)
    .force('x', d3.forceX(d => x(d.ratio)))
    .force('y', d3.forceY(d => (height - margin.bottom + margin.top) / 2))
    .force('collide', d3.forceCollide()
      .radius(d => 4 + 1))
    .stop();

  for (let i = 0; i < 50; ++i) simulation.tick();

  const yRandom = d3.randomUniform(height - margin.bottom, margin.top);

  circles.selectAll('circle')
    .data(data, d => d.id)
    .join(
      enter => enter.append('circle')
        .attr('stroke', 'none')
        .attr('fill', 'black')
        .attr('cx', d => d.x)
        // .attr('cx', d => x(d.ratio))
        .attr('cy', d => d.y)
        // .attr('cy', (height - margin.bottom + margin.top) / 2)
        // .attr('cy', yRandom)
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
        }),
      // .on('mouseout', () => tooltip.style('visibility', 'hidden')),
      update => update
        .call(update => update.transition(t)
          .attr('cx', d => x(new Date(d.publicationYear)))
          .attr('cy', d => y(d.avgRating))
        ),
    );
}