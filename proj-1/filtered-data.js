const vars = require('./vars.js'); // needs ./ even though at same level
const fs = require('fs');

const Q = vars.Q,
  U = vars.U;

console.log(Q, U);

let objectTypeCount = {};

for (let name of Q) {

  let rawDataStr = fs.readFileSync(`raw-data/${U}/${name}-raw-data-${U}.json`);

  let rawData = JSON.parse(rawDataStr);

  let topics = {};

  /*
  * TODO: Filter out exact duplicate title 
  * (i.e. "title": "Carte-de-visite portrait of Mary Anna Longstreth" 
  * appears under "Mary" and "Anna")
  *
  * TODO: isObjectType doesn't work in all cases
  *
  *
  */


  let data = rawData.filter(d => {
    // if (d.content.descriptiveNonRepeating.online_media) {
    if (titleIncludes(d, name)
      && !titleIncludes(d, `by ${name}`) //) {
      && d.content.indexedStructured.object_type // check for object type, filter out those missing object_type
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

  let topicsArr = Object.entries(topics);
  topicsArr.sort((a, b) => a[1] - b[1]);
  topicsArr = topicsArr.filter(d => d[1] > 5);

  objectTypeCount[name] = topicsArr;

  console.log(topicsArr, data.length);

}

writeJSON(objectTypeCount, U + '-count.json');

function titleIncludes(d, str) {
  let lowerTitle = d.title.toLowerCase();
  return lowerTitle.includes(str.toLowerCase());
}

function isObjectType(d, objType) {
  return d.content.indexedStructured.object_type.includes(objType);
}

// writeJSON(data, `filtered-data/${U}/${Q}-filtered-data-${U}.json`);

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}