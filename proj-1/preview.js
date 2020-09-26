// const Q = 'mary';
// const Q = 'elizabeth';
// const Q = 'anna';
const Q = 'james';
// const Q = 'john';
// const Q = 'william';

(async () => {
  let res = await fetch(`filtered-data/${Q}-filtered-data.json`);
  let data = await res.json();
  console.log(data);

  for (let d of data) {
    if (d.content.descriptiveNonRepeating.online_media) {
      let img = document.createElement('img');
      // img.src = d.content.descriptiveNonRepeating.online_media.media[0].thumbnail + '_screen';
      img.src = d.content.descriptiveNonRepeating.online_media.media[0].thumbnail + '_thumb';
      document.body.appendChild(img);
    }
  }
})();