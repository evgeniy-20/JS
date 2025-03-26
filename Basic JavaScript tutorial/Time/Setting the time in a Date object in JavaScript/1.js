// Дізнайтеся, який день тижня був у ваш день народження.

let date = new Date(1997, 6, 10);
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[date.getDay()]);
