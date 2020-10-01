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

let W = ['mary', 'elizabeth', 'anna', 'amanda', 'helen', 'jocelyn', 'margaret', 'karen', 'rosalie', 'annabel', 'sarah', 'emma', ' linda', 'susan', 'barbara', ' clara', ' jennifer', 'florence', 'patricia', 'jessica'];
let M = ['james', 'john', 'william', 'samuel', 'joel', 'george', 'joseph', 'charles', 'frank', 'robert', 'henry', 'andrew', 'edward', 'michael', 'thomas', 'christopher', 'daniel', 'matthew', 'david', 'anthony'];

module.exports = {
  W,
  M,

  Q: [...W, ...M],

  U: ['NMAH', 'SAAM', 'NPG', 'NMAAHC']
};