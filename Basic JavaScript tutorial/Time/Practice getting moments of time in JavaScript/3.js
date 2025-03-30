// Визначте, скільки днів залишилося до нового року.
let date = new Date();
let endOfYear = new Date(date.getFullYear(), 11, 31, 23, 59, 59);
let daysLeft = Math.ceil((endOfYear - date) / (1000 * 60 * 60 * 24));
console.log(daysLeft);
