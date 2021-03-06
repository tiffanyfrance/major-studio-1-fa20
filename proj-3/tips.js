// building each song tooltip
import { data } from './data.js';

let navItemArr = document.querySelectorAll('h3 a img');
let wavePromises = [];
let arrWaves = [];

d3.select('#slide-native')
  .selectAll('.tip')
  .data(data)
  .enter()
  .append('div')
  .attr('class', d => `${d.genre}-tip tip`)
  .attr('id', d => `${d.id}-tip`)
  .attr('data-locations', d => d.locations)
  .html(d => {
    return `<h4><img src="svgs/${d.genre}.svg" />${d.trackName}</h4>
            <a class="play"><img src="play.svg" class="wave-btn"></a>
            <div class="wave-container">
            <div class="waves" id="${d.id}-wf"></div>
            </div>
            <div class="tip-content">
            <p>
            <img src="albums/${d.trackImg}" />
            ${d.trackStr} 
            <a href="${d.trackURL}" target="_blank">${d.trackAlbum}</a>
            </p>
            </div>`
  })
  .style('top', d => d.top)
  .style('left', d => d.left)
  .each(buildWave);

Promise.allSettled(wavePromises).then(() => {
  $('body').css('overflow-y', 'auto');
  console.log(performance.now());

  d3.select('#main-title .loader').remove();
});

function buildWave(d) {
  let { id, wavecolor, progresscolor, trackMP3 } = d;

  let wavesurfer = WaveSurfer.create({
    container: document.querySelector(`#${id}-wf`),
    barWidth: 3,
    barRadius: 3,
    cursorWidth: 0,
    barHeight: 2,
    barGap: null,
    progressColor: progresscolor,
    height: 40,
    waveColor: wavecolor
  });

  wavesurfer.on('pause', function () {
    document.querySelector(`#${id}-tip .wave-btn`).src = 'pause.svg';
    
    navItemArr.forEach(item => {
      item.style.animation = `none`;
    }); 
  });

  let p = new Promise(function (resolve, reject) {
    wavesurfer.on('ready', () => {
      resolve();
    });
  });

  wavePromises.push(p);

  wavesurfer.load(trackMP3);

  arrWaves.push(wavesurfer);

  document.querySelector(`#${id}-tip`).onclick = () => {
    for (let ws of arrWaves) {
      if (ws !== wavesurfer) ws.stop();
    }

    wavesurfer.playPause();

    $('.wave-btn').attr('src', 'play.svg');
    $('.tip-content').css('visibility', 'hidden');

    if (wavesurfer.isPlaying()) {
      document.querySelector(`#${id}-tip .wave-btn`).src = 'pause.svg';

      navItemArr.forEach(item => {
        let randoSec = Math.floor(Math.random() * 5 + 1) + "s";
        item.style.animation = `wiggle ${randoSec} infinite`;
      });
    }

    $(`#${id}-tip .tip-content`).css('visibility', 'visible');
    // $(`#${id}-tip .tip-content`).slideDown();

    let elem = document.querySelector(`#${id}-tip`);

    $(`svg path`).removeClass('active');
    $(`svg path`).removeClass('active-banda');
    $(`svg path`).removeClass('active-norteno');
    $(`svg path`).removeClass('active-mariachi');

    if (d.genre === 'native' || d.genre === 'banda' || d.genre === 'norteno' || d.genre === 'mariachi')
      if (elem.dataset.locations) {
        let activeClass = 'active';

        if (d.genre !== 'native') {
          activeClass += '-' + d.genre;
        }

        $(`svg path.${elem.dataset.locations.toLowerCase()}`).addClass(activeClass);
      }
  }
};