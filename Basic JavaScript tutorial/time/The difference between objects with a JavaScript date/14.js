// Виведіть на екран кількість мілісекунд, що пройшла між 1вересня 2000 та 15лютого 2010року.
let feb = new Date(2010, 1, 15, 23, 59, 59);
let sep = new Date(2000, 8, 1, 23, 59, 59);
let difference = feb - sep;
console.log(difference);
