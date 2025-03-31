// Напишіть код, який визначатиме, чи високосний поточний рік.
let date = new Date();
let year = date.getFullYear();
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`Поточний рік ${year} ${isLeapYear ? 'високосний' : 'невисокосний'}`);
