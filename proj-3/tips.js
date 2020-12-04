// building each song tooltip
import { data } from './data.js';

let arrWaves = [];

d3.select('#corridos')
  .selectAll('.tip')
  .data(data)
  .enter()
  .append('div')
  .attr('class', 'tip')
  .attr('id', d => `${d.id}-tip`)
  .html(d => {
    return `<h4>${d.trackName}</h4>
            <a><img src="play.svg" class="wave-btn"></a>
            <div class="waves" id="${d.id}-wf"></div>
            <p>${d.trackStr}</p>`
  })
  .style('top', d => d.top + 'px')
  .style('left', d => d.left + 'px')
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

    let imgs = document.querySelectorAll('.wave-btn');

    for (let i of imgs) {
      i.src = 'play.svg';
    }

    if (wavesurfer.isPlaying()) {
      document.querySelector(`#${id}-tip .wave-btn`).src = 'pause.svg';
    }
  };
}