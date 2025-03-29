// Виведіть на екран кількість днів, що минула між 1 березня 1988 року і 10 січня 2000 року.

let date = new Date(2000, 0, 10);
let date2 = new Date(1988, 2, 1);
let diff = (date - date2) / (1000 * 60 * 60 * 24);
console.log(diff);
