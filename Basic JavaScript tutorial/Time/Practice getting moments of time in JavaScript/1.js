// Визначте, скільки секунд минуло від початку дня до теперішнього моменту часу.

let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
let seconds = Math.floor((now - startOfDay) / 1000);
console.log(seconds);
