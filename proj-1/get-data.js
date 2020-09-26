const fetch = require('node-fetch');
const fs = require('fs');

// const API_KEY = 'FHPaQjcqKGlTdHDgyjjCEEqav0YlbvN61us1miIH';
const API_KEY = 'UIgHKgyJmPqbv5dh219gWw37WoLdQ57TbtDeo8Oa';
const Q = 'Mary';
// const Q = 'Elizabeth';
// const Q = 'Anna';
// const Q = 'James';
// const Q = 'John';
// const Q = 'William';

// const U = 'NMAH'; // Smithsonian National Museum of American History
const U = 'SAAM'; // American Art Museum
// const U = 'CHNDM'; // Cooper-Hewitt, National Design Museum
// const U = 'NPG'; // Portrait Gallery
// const U = 'FSG'; // Freer Gallery of Art and Arthur M. Sackler Gallery
// const U = 'HSFA'; // Human Studies Film Archives
// const U = 'NMAAHC'; // National Museum of African American History and Culture

const ROWS = 1000;

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

  writeJSON(data, 'raw-data/' + Q.toLowerCase() + '-raw-data-' + U + '.json');
})();

function writeJSON(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}
