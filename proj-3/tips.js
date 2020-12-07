// building each song tooltip
import { data } from './data.js';

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
  .each(function (d) {
    buildWave(d.id, d.wavecolor, d.progresscolor, d.trackMP3)
  });

function buildWave(id, wavecolor, progresscolor, mp3) {
  let wavesurfer = WaveSurfer.create({
    container: document.querySelector(`#${id}-wf`),
    barWidth: 3,
    barRadius: 3,
    cursorWidth: 0,
    barHeight: 2,
    barGap: null,
    progressColor: progresscolor,
    height: 30,
    waveColor: wavecolor
  });

  wavesurfer.on('pause', function () {
    document.querySelector(`#${id}-tip .wave-btn`).src = 'pause.svg';
  });

  wavesurfer.load(mp3);

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
    }

    $(`#${id}-tip .tip-content`).css('visibility', 'visible');

    let elem = document.querySelector(`#${id}-tip`);

    $(`svg path`).removeClass('active');
    $(`svg path.${elem.dataset.locations.toLowerCase()}`).addClass('active');
  };
}