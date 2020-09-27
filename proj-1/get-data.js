const vars = require('./vars.js');
const fetch = require('node-fetch');
const fs = require('fs');

// const API_KEY = 'FHPaQjcqKGlTdHDgyjjCEEqav0YlbvN61us1miIH';
const API_KEY = 'UIgHKgyJmPqbv5dh219gWw37WoLdQ57TbtDeo8Oa';

const ROWS = 1000;

const Q = vars.Q,
    U = vars.U;
    
console.log(Q,U);

(async () => {
  let data = [];

  let start = 0;
  let rowCount;

  do {
    let res = await fetch(`https://api.si.edu/openaccess/api/v1.0/search/?api_key=${API_KEY}&rows=${ROWS}&start=${start}&q=${Q} AND unit_code:${U}`);
    let result = await res.json();

    console.log(start);

    data.push(...result.response.rows);

    start += ROWS;
    rowCount = result.response.rowCount;
  } while (start < rowCount);

  writeJSON(data, 'raw-data/' + U + '/' + Q.toLowerCase() + '-raw-data-' + U + '.json');
})();

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
