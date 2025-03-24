// Дано масив із числами. Залиште в ньому тільки числа, які більші за нуль, але менші за 10.

let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 15, 16, 0, 10];
let newArray = arr.filter(elem => elem > 0 && elem < 10);
console.log(newArray);
