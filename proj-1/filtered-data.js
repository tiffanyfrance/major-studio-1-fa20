const vars = require('./vars.js'); // needs ./ even though at same level
const fs = require('fs');

const Q = vars.Q,
  U = vars.U;

console.log(Q, U);

let totals = {};

for (let name of Q) {
  totals[name] = 0;
}

let topics = {};

for (let name of Q) {
  for (let u of U) {
    let rawDataStr = fs.readFileSync(`raw-data/${u}/${name}-raw-data-${u}.json`);

    let rawData = JSON.parse(rawDataStr);

    /*
    * TODO: Filter out exact duplicate title 
    * (i.e. "title": "Carte-de-visite portrait of Mary Anna Longstreth" 
    * appears under "Mary" and "Anna") - edge case
    *
    *
    * TODO: Top 40 categories by gender (2 lists)
    *
    * TODO: Total number of results by person 
    * 
    * TODO: Each person should have minimum 3 tags
    * 
    */
    for (let d of rawData) {
      if (d.content.indexedStructured.topic
        && titleIncludes(d, name)
        && !titleIncludes(d, `by ${name}`) //) {
        && d.content.indexedStructured.object_type // check for object type, filter out those missing object_type
        && !isObjectType(d, 'Sound recordings')
        && !isObjectType(d, 'Button')
        && !isTopic(d, 'Button')) {

        for (let topicName of d.content.indexedStructured.topic) {
          let t = topics[topicName];

          if (!t) {
            t = {
              topic: topicName,
              count: 0
            };

            for (let n of Q) {
              t[n] = 0;
            }

            topics[topicName] = t;
          }

          t.count++;
          t[name]++;
          totals[name]++;
        }
      }
    }
  }
}

let topicsSet = new Set();

let topicsArr = Object.values(topics);

topicsArr.sort((a, b) => (b.mary + b.elizabeth + b.anna) - (a.mary + a.elizabeth + a.anna));
let womenTopicsArr = topicsArr.slice(0, 50);
womenTopicsArr.forEach(topicsSet.add, topicsSet);

topicsArr.sort((a, b) => (b.james + b.john + b.william) - (a.james + a.john + a.william));
let menTopicsArr = topicsArr.slice(0, 50);
menTopicsArr.forEach(topicsSet.add, topicsSet);

console.log(topicsSet.size);

// topicsArr.sort((a, b) => b.count - a.count);
// topicsArr = topicsArr.filter(t => t.count > 3);

writeJSON({ totals, topics: Array.from(topicsSet) }, 'topic-count.json');

function titleIncludes(d, str) {
  let lowerTitle = d.title.toLowerCase();
  return lowerTitle.includes(str.toLowerCase());
}

function isObjectType(d, objType) {
  return d.content.indexedStructured.object_type.includes(objType);
}

function isTopic(d, t) {
  return d.content.indexedStructured.topic.includes(t);
}

// writeJSON(data, `filtered-data/${U}/${Q}-filtered-data-${U}.json`);

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}