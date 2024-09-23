//Визначте, скільки секунд пройшло з початку дня до теперішнього часу.

let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let diffInMillns = now - startOfDay;
let secondsSinceMidnight = Math.floor(diffInMillns / 1000);
console.log(secondsSinceMidnight);
