// Визначте, який день тижня буде 31 грудня наступного року.
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
let dayOfWeek = date.getDay();
let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
console.log(date);
console.log(dayOfWeek);
console.log(days[dayOfWeek]);
