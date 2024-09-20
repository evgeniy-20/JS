// Дізнайтеся, який день тижня був у день народження.

let date = new Date(1997, 5, 10);
let day = date.getDay();
let days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
console.log(days[day]);
