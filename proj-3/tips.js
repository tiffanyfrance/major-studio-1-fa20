// let wavesurfer;

let corridos = document.getElementById('corridos');

let wavecolors = {
  corridos: ['#fbcb3b','#F7931E'],
}

for (var i = 0; i < data.length; i++) {
  let d = data[i];
  let waveId = `${d.id}-wf`;

  corridos.innerHTML += `<div class="tip" id="${d.id}">
      <h4>${d.trackName}</h4><div id="${waveId}"></div>
      <p>${d.trackStr}</p></div>`

  buildWave('#' + waveId, d.wavecolor, d.progresscolor, d.trackMP3);
}

function buildWave(id, wavecolor, progresscolor, mp3) {
  let wavesurfer = WaveSurfer.create({
    container: document.querySelector(id),
    barWidth: 3,
    barRadius: 3,
    cursorWidth: 0,
    barHeight: 2, 
    barGap: null,
    progressColor: progresscolor,
    height: 50,
    waveColor: wavecolor
  });

  wavesurfer.load(mp3);
}

for (var i = 0; i < data.length; i++) {
  d3.select('#' + data[i].id)
    .on('click', () => wavesurfer.playPause());
}

  // var wavesurfer = WaveSurfer.create({
//   container: document.querySelector('#waveform'),
//     // waveColor: '#D9DCFF',
//     // progressColor: '#4353FF',
//     // cursorColor: '#4353FF',
//     barWidth: 3,
//     barRadius: 3,
//     cursorWidth: 0,
//     // height: 200,
//     // barGap: 3,
//     // container: document.querySelector('#waveform'),
//     // barWidth: 2,
//     barHeight: 2, // the height of the wave
//     // barMinHeight: 1.75,
//     barGap: null, // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
//     progressColor: "#F7931E",
//     height: 50,
//     waveColor: "#fbcb3b"
// });

// wavesurfer.load('la-bamba.mp3');


// var wavesurfer1 = WaveSurfer.create({
//   container: document.querySelector('#waveform1'),
//     // waveColor: '#D9DCFF',
//     // progressColor: '#4353FF',
//     // cursorColor: '#4353FF',
//     barWidth: 3,
//     barRadius: 3,
//     cursorWidth: 0,
//     // height: 200,
//     // barGap: 3,
//     // container: document.querySelector('#waveform'),
//     // barWidth: 2,
//     barHeight: 2, // the height of the wave
//     // barMinHeight: 1.75,
//     barGap: null, // the optional spacing between bars of the wave, if not provided will be calculated in legacy format
//     progressColor: "#F7931E",
//     height: 50,
//     waveColor: "#fbcb3b"
// });

// wavesurfer1.load('Adelita.mp3');