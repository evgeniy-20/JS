// Виведіть на екран кількість мілісекунд, що минула між 1 вересня 2000 року і 15 лютого 2010 року.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diff = date2 - date1;
console.log(diff);
