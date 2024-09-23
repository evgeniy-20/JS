// Визначте скільки секунд залишилося до кінця дня.

let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let diffInMillns = endOfDay - now;
let secondsSinceMidnight = Math.floor(diffInMillns / 1000);
console.log(secondsSinceMidnight);
