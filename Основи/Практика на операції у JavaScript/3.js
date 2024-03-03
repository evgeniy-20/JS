// Найдите количество секунд в году.

let seconds = 60;
let minutes = 60;
let hourSeconds = seconds * minutes;
let daySeconds = 24 * hourSeconds;
let monthSeconds = 30 * daySeconds;
let yearOfSeconds = 366 * monthSeconds;
console.log(yearOfSeconds);
