// Визначте, скільки днів між 20 числом поточного місяця і 10 числом наступного.

let today = new Date();
let nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 10);
let currentMonth = new Date(today.getFullYear(), today.getMonth(), 20);
let difference = nextMonth - currentMonth;
console.log(difference);
