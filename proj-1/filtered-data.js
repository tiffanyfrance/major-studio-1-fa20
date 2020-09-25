const fs = require('fs');

// const Q = 'mary';
// const Q = 'elizabeth';
// const Q = 'anna';
// const Q = 'james';
// const Q = 'john';
const Q = 'william';

let rawDataStr = fs.readFileSync('raw-data/' + Q + '-raw-data.json');

let rawData = JSON.parse(rawDataStr);

let data = rawData.filter(d => {
  // if (d.content.descriptiveNonRepeating.online_media) {
    if (includesName(d.title)) {
      return true;
    }

    // if (d.content.indexedStructured.name) {
    //   for (let n of d.content.indexedStructured.name) {
    //     if (includesName(n)) {
    //       return true;
    //     }
    //   }
    // }
  // }

  return false;
});

function includesName(str) {
  let lowerStr = str.toLowerCase();
  // return lowerStr.includes('mary') || lowerStr.includes('marie');
  return lowerStr.includes(Q);
}

console.log(data.length);

writeJSON(data, 'filtered-data/' + Q + '-filtered-data.json');

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}