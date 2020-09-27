// import { Q, U } from 'vars.js';
const vars = require('./vars.js');
const fs = require('fs');

let Q = vars.Q,
    U = vars.U;
console.log(Q,U);

let rawDataStr = fs.readFileSync('raw-data/' + Q + '-raw-data.json');
// let rawDataStr = fs.readFileSync('raw-data/' + Q + '-raw-data-' + U + '.json');

let rawData = JSON.parse(rawDataStr);

let topics = {};

let data = rawData.filter(d => {
  // if (d.content.descriptiveNonRepeating.online_media) {
  if (titleIncludes(d, Q)
    && !titleIncludes(d, `by ${Q}`) // ) {
    && !isObjectType(d, 'Sound recordings')
    && !isObjectType(d, 'Button')) {

    if (d.content.indexedStructured.topic) {
      for (let t of d.content.indexedStructured.topic) {
        let count = topics[t];

        if (!count) {
          count = 0;
        }

        topics[t] = count + 1;
      }
    }

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

function titleIncludes(d, str) {
  let lowerTitle = d.title.toLowerCase();
  return lowerTitle.includes(str.toLowerCase());
}

function isObjectType(d, objType) {
  return d.content.indexedStructured.object_type.includes(objType);
}

let topicsArr = Object.entries(topics);
topicsArr.sort((a, b) => a[1] - b[1]);
topicsArr = topicsArr.filter(d => d[1] > 5);

console.log(topicsArr, data.length);

writeJSON(data, 'filtered-data/' + Q + '-filtered-data-' + U +'.json');

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}