// Визначте скільки днів залишилося до найближчої неділі.

let date = new Date();
let day = date.getDay();
let daysLefy = 7 - day;
console.log(daysLefy);
