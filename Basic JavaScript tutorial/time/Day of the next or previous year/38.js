// Визначте, який день тижня був рік тому в таку саму дату, як сьогодні.

let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let dayOfweek = date.getDay();
let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
console.log(date);
console.log(dayOfweek);
console.log(days[dayOfweek]);
