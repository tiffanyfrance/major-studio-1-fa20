const vars = require('./vars.js');

const fetch = require('node-fetch'),
  fs = require('fs');

require('dotenv').config();

const API_KEY = process.env.API_KEY;

const ROWS = 1000;

const Q = vars.Q,
  U = vars.U;

console.log(Q, U);

(async () => {

  for (let q of Q) {
    for (let u of U) {

      let data = [];

      let start = 0;
      let rowCount;

      console.log(q,u);

      do {
        let res = await fetch(`https://api.si.edu/openaccess/api/v1.0/search/?api_key=${API_KEY}&rows=${ROWS}&start=${start}&q=${q} AND unit_code:${u}`);
        let result = await res.json();

        data.push(...result.response.rows);

        start += ROWS;
        rowCount = result.response.rowCount;

        console.log(start, rowCount);
      } while (start < rowCount);

      writeJSON(data, 'raw-data/' + u + '/' + q.toLowerCase() + '-raw-data-' + u + '.json');

    }
  }
})();

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
