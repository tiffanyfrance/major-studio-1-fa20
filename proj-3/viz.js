import { data } from './data.js';

var w = Math.min(window.innerWidth, 1600);
var h = window.innerHeight;
var scale = 1;

console.log(w)

// let svg = d3.select("#viz")
//   .append('svg')
//   .attr('width', w)
//   .attr('height', h)
//   .attr('viewbox', `0 0 ${w} ${h}`);

// for (var d of data) {
//   svg.append('g')
//     .attr('id', d.id + '-flower')
//     .html(d.genresvg)
//     .attr('transform', 
//           `scale(${scale}, ${scale}) 
//            rotate(${d.rotate})
//            translate(${d.epicX}, ${d.epicY})`); 
// }

// let leafdata = [[160,140,45], [200,350,0]];

// for (var l of leafdata) {
//   svg.append('g')
//     .attr('class', 'leaf')
//     .html(leafsvg)
//     .attr('transform', 
//           `scale(${scale}, ${scale}) 
//            translate(${l[0]}, ${l[1]}) 
//            rotate(${l[2]})`); 
// }




/////// ANIMATION ////////

var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');

let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  title.style.transform = 'translateY(' + Math.min(0.06 * elapsed, 60) + 'px)';


  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);


d3.select('#title')
  .transition()
  .duration(600)
  .style('opacity', 1);

d3.select('#subtitle')
  .transition()
  .delay(1000)
  .duration(600)
  .style('opacity', 1);





/*
 * Animation
 * 1. Scroll brings up h2
 * 2. h2 to stops when 15% from h1
 * 3. (a) h1 & h2 scroll up together
 *    (b) while all flowers except indigenous rotate-fade
 *    (c) indigenous flowers transform with duration into resting place
 * 4. (a) map, subtitle, song names fade in
 *    (b) first song tip folds down
 * 5. open song tip folds up
 * 6. (a) flowers and title fade out
 *    (b) map goes gray > shifts > then colors area
 *    (c) flowers fade in, content fades in
 *
 *
 *
 *
 * extra: flowers twinkle to indicate clickable, hover reveals tip
 */