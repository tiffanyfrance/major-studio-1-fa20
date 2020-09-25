(async () => {
  let res = await fetch('data.json');
  let data = await res.json();
  console.log(data);

  for (let d of data) {
    let img = document.createElement('img');
    // img.src = d.content.descriptiveNonRepeating.online_media.media[0].thumbnail + '_screen';
    img.src = d.content.descriptiveNonRepeating.online_media.media[0].thumbnail + '_thumb';
    document.body.appendChild(img);
  }
})();