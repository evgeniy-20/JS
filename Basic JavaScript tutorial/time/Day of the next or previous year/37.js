// Визначте, який день тижня буде через рік у таку саму дату, як сьогодні.

let now = new Date();
let date = new Date(now.getFullYear() + 1, 8, 23);
let dayOfWeek = date.getDay();
let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
console.log(date);
console.log(dayOfWeek);
console.log(days[dayOfWeek]);
