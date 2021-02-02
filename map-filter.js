// map()
// creates a new array with the result function element
// Does not work for array elements without values
let math = [4, 6, 7, 9, 11, 15, 20];
const result = math.map((x) => x * x);
console.log(result); // show [16, 36 , 49, 121, 225, 400]


// filter()
// The function not run array elements without the filter
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let bigNumber = number.filter((x) => x > 5);
console.log(bigNumber); // show [6, 7, 8, 9]
