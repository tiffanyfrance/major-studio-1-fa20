const margin = { top: 25, right: 20, bottom: 35, left: 40 };
const width = 900;
const height = 600;

const svg = d3.select('body').append('svg')
  .attr('viewBox', [0, 0, width, height]);

const tooltip = d3.select('body').append('div')
  .attr('class', 'svg-tooltip');

let data;
let x, y;
let xAxis, yAxis;
let xAxisG, yAxisG;
let circles;
let gridLines1;

(async () => {
  data = await fetch('data1000.json');
  data = await data.json();

  x = d3.scaleTime()
    .range([margin.left, width - margin.right]);

  y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.avgRating)).nice()
    .range([height - margin.bottom, margin.top]);

  xAxis = g => g.call(d3.axisBottom(x).ticks(width / 80));

  yAxis = g => g.call(d3.axisLeft(y));

  let grid = svg.append('g')
    .attr('stroke', '#eee')
    .attr('stroke-dasharray', 3);

  gridLines1 = grid.append('g');

  grid.append('g')
    .selectAll('line')
    .data(y.ticks())
    .join('line')
    .attr('y1', d => 0.5 + y(d))
    .attr('y2', d => 0.5 + y(d))
    .attr('x1', margin.left)
    .attr('x2', width - margin.right);

  circles = svg.append('g');

  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', margin.left)
    .attr('height', height)
    .attr('fill', 'white');

  xAxisG = svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`);

  yAxisG = svg.append('g')
    .attr('transform', `translate(${margin.left},0)`);

  updateGraph();

  svg.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .selectAll('text')
    .data(data);
})();

const defaultXDomain = [new Date('1740-01-01 00:00:00'), new Date('2020-12-31 00:00:00')];

function updateGraph() {
  const t = svg.transition()
    .duration(250);

  x.domain([new Date('1740-01-01 00:00:00'), new Date('2020-12-31 00:00:00')]);

  xAxisG.transition(t)
    .call(xAxis);

  yAxisG.transition(t)
    .call(yAxis);

  gridLines1.selectAll('line')
    .data(x.ticks(), d => d)
    .join(
      enter => enter.append('line')
        .attr('x1', d => 0.5 + x(d))
        .attr('x2', d => 0.5 + x(d))
        .attr('y1', margin.top)
        .attr('y2', height - margin.bottom),
      update => update
        .call(update => update.transition(t)
          .attr('x1', d => 0.5 + x(d))
          .attr('x2', d => 0.5 + x(d))
        )
    )

  // let simulation = d3.forceSimulation(data)
  //   .force('x', d3.forceX(d => x(new Date(d.publicationYear))))
  //   .force('y', d3.forceY(d => y(d.avgRating)))
  //   .force('collide', d3.forceCollide()
  //     .radius(4 + 1))
  //   .stop();

  // for (let i = 0; i < 50; ++i) simulation.tick();

  const yRandom = d3.randomUniform(...y.range());

  circles.selectAll('circle')
    .data(data, d => d.id)
    .join(
      enter => enter.append('circle')
        .attr('stroke', 'none')
        .attr('fill', 'black')
        .attr('cx', d => x(new Date(d.publicationYear)))
        // .attr('cx', d => d.x)
        // .attr('cy', (y.range()[0] + y.range()[1])/2)
        .attr('cy', yRandom)
        // .attr('cy', d => d.y)
        .attr('r', 4)
        .style('opacity', 1)
        .on('mouseover', () => tooltip.style('visibility', 'visible'))
        .on('mousemove', function (e, d) {
          let left = null
          let right = null;

          if (e.offsetX < width / 2) {
            left = (e.pageX + 10) + 'px';
          } else {
            let bodyMarginRight = parseInt(window.getComputedStyle(document.body).marginRight);
            let tooltipPaddingRight = parseInt(window.getComputedStyle(tooltip.node()).paddingRight);
            right = (document.body.clientWidth - e.pageX + bodyMarginRight + tooltipPaddingRight + 10) + 'px';
          }

          tooltip
            .style('top', (e.pageY - 10) + 'px')
            .style('left', left)
            .style('right', right)
            .html(`Title: ${d.title}<br>Year: ${d.publicationYear}<br>Rating: ${d.avgRating}`);
        })
        .on('mouseout', () => tooltip.style('visibility', 'hidden')),
      update => update
        .call(update => update.transition(t)
          .attr('cx', d => x(new Date(d.publicationYear)))
          .attr('cy', d => y(d.avgRating))
        ),
    );
}