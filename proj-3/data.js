let wavecolors = {
  corridos: ['#fbcb3b','#F7931E'],
  banda: ['yellow', '#ff0'],
}

let data = [
  {
    id: 'corridos-01',
    genre: 'corridos',
    genresvg: corridossvg,
    wavecolor: wavecolors.corridos[0],
    progresscolor: wavecolors.corridos[1],
    top: 50,
    left: 250,
    x: 200,
    y: 354,
    trackName: 'La Bamba',
    trackImg: '',
    trackMP3: 'songs/la-bamba.mp3',
    trackStr: `something`
  },
  {
    id: 'corridos-02',
    genre: 'corridos',
    genresvg: corridossvg,
    wavecolor: wavecolors.corridos[0],
    progresscolor: wavecolors.corridos[1],
    top: 210,
    left: 600,
    x: 900,
    y: 320,
    trackName: 'Adelita',
    trackImg: '',
    trackMP3: 'songs/Adelita.mp3',
    trackStr: `In April, the first of the month<br />
              On Holy Thursday in the morning,<br />
              Villa went forth from Parral<br />
              To launch and speed up a campaign`
  },
  {
    id: 'banda-01',
    genre: 'banda',
    genresvg: bandasvg,
    wavecolor: wavecolors.banda[0],
    progresscolor: wavecolors.banda[1],
    top: 280,
    left: 1000,
    x: 430,
    y: 100,
    trackName: 'Marcha Zacatecas',
    trackImg: '',
    trackMP3: './songs/Marcha-Zacatecas.mp3',
    trackStr: `Alludes to the military genre, but soon turns 
               into a highly danceable tune. As often with 
               marches, a lyric trio alternates with the 
               march proper. The genre was much in vogue 
               among rural audiences, and local banderos 
               continued to compose marches well into the 
               twentieth century`
  }
];

export { data };