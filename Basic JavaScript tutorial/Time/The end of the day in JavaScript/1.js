// Визначте, скільки годин залишилося до кінця дня.

let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMinutes(), now.getSeconds());
let hoursLeft = endOfDay.getHours() - now.getHours();
console.log(hoursLeft);
