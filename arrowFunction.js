// ES6 Fat Arrow Function
// normal function
function normal() {
  return 25;
}
// console.log(normal());

// es6 function
let number = () => {
  return 45;
};
// console.log(number());

// es6  function
const getNumber = () => {
  return 2 + (5 * 20 * 68) / 5;
};
// console.log(getNumber());

let getInput = () => 25;
// console.log(getInput());

// single line arrow function
let getMath = (x, y) => x * y;
// console.log(getMath(10, 25));

let calculate = (a, b) => a * b;
console.log(calculate(25, 65));
