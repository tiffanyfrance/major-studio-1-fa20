/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task 1
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2; // false bc explicit === provides differing results

// Task 2
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your code works.

var test4 = 0 === ""; 
var test5 = 1 == "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task 3
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x; // 0.30000000000000004

var q = z - x; // 0.3

var r = y - w; // 0.30000000000000004

// This is floating point. It can be rounded to a whole number. 0.1 is often the cause of this issue.
