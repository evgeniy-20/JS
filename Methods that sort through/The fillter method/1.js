// Даний масив із числами. Залишіть у ньому лише позитивні числа.

let arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

let newArr = arr.filter(elem => elem > 0);

console.log(newArr);
