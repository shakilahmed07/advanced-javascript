// truthy values :
// '0'
// 1, 2, 3, 4 etc;
// ' ' (space string)
// Infinity
// {}
// []
// true

// example
let number = {}; // truthy value / falsy value
if (number) {
  console.log(`truthy value`);
} else {
  console.log(`falsy value`);
}

// falsy values :
// 0 (only zero)
// "" (no string)
// undefined
// NaN
// null
// false
