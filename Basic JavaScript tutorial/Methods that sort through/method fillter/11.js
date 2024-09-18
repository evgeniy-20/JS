// Даний масив із числами. Залишіть у ньому тільки ті числа, добуток яких на їхній порядковий номер менший 30.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.filter((elem, index) => (elem * index) < 30);

console.log(newArr);
