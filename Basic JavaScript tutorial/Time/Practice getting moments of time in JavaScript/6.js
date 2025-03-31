// Визначте, який день тижня буде в останньому дні поточного місяця.

let date = new Date();
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let weekDay = lastDay.getDay();
console.log(weekDay);
