// Дано масив із числами. Залиште в ньому тільки ті числа, добуток яких на їхній порядковий номер менший за 30.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = arr.filter((item, index) => item * index < 30);
console.log(newArray);
