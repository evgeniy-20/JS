// Виведіть на екран кількість днів, що минуло між 1 березнем 1988і 10 січнем 2000 року.

let date1 = new Date(2000, 0, 10);
let date2 = new Date(1980, 2, 1);
let differenceInMillis = date1 - date2;
let differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);
console.log(differenceInDays);
