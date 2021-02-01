// array spread
let number = [4, 5, 6, 11, 15, 49, 50];
let newNumbers = [...number, 7, 8, 9, 10];
// console.log(newNumbers);

let calculated = (x, y) => {
  return x * y;
};
var arr = [8, 7];
// console.log(calculated(...arr));

// object spreading
var myObj1 = {
  x: 5,
  y: 10,
  z: 15,
};

var myObj2 = {
  a: 20,
  b: 25,
  c: 30,
};
// console.log({ ...myObj1, ...myObj2 });
