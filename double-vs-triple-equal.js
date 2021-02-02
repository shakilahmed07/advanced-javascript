// double equal (==)
// check only value
// example
const double = 5;
const double2 = "5"; // type change but value same
if (double == double2) {
  // double equal
  console.log(`true`); // show true
} else {
  console.log(`false`);
}

// triple equal (===)
// check type & value
// example
const number = 5;
const number2 = "5"; // type change but value same
if (number === number2) {
  // triple equal
  console.log(`true`);
} else {
  console.log(`false`); // show false
}
