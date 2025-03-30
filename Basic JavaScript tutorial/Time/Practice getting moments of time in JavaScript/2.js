// Визначте, скільки секунд залишилося до кінця дня.

let date = new Date();
let satartOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
let endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
let seconds = Math.floor((endOfDay - date) / 1000);
console.log(seconds);
