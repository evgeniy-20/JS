//Визначте, що рік знаходиться в інтервалі від 1900до 2100за допомогою одного лише регулярного виразу.

const yearRegex = /^(19\d\d|20\d\d|2100)$/;
const year1 = 1950;
const year2 = 2022;
const year3 = 2200;

console.log(yearRegex.test(year1)); 
console.log(yearRegex.test(year2)); 
console.log(yearRegex.test(year3));

