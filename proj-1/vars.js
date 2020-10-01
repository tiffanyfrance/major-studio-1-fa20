// const Qval = 'mary';
// const Qval = 'elizabeth';
// const Qval = 'anna';
// const Qval = 'james';
// const Qval = 'john';
// const Qval = 'william';

// const Uval = 'NMAH'; // Smithsonian National Museum of American History
// const Uval = 'SAAM'; // American Art Museum
// const Uval = 'NPG'; // Portrait Gallery
// const Uval = 'NMAAHC'; // National Museum of African American History and Culture

let W = ['mary', 'elizabeth', 'anna', 'helen', 'margaret', 'sarah', 'emma', 'susan', 'clara', 'florence'];
let M = ['james', 'john', 'william', 'george', 'joseph', 'charles', 'robert', 'henry', 'edward', 'thomas'];

module.exports = {
  W,
  M,

  Q: [...W, ...M],

  U: ['NMAH', 'SAAM', 'NPG', 'NMAAHC']
};