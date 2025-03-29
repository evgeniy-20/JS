// Визначте, скільки годин минуло між початком дня і поточним моментом часу.

let startDay = new Date();
startDay.setHours(0, 0, 0, 0, 0);
let currentTime = new Date();
let timeOfFirence = currentTime - startDay;
let hourse = Math.floor(timeOfFirence / 1000 / 60 / 60);
let minutes = Math.floor((timeOfFirence / 1000 / 60) % 60);
let seconds = Math.floor((timeOfFirence / 1000) % 60);
let milliseconds = Math.floor(timeOfFirence % 1000);
console.log('Hourse: ' + hourse, 'Minutes: ' + minutes, 'Seconds: ' + seconds, 'Milliseconds: ' + milliseconds);;
