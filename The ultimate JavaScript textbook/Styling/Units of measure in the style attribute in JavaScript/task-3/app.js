// Дана також кнопка. За кліком на кнопку виведіть розмір шрифту діва без одиниць виміру.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    let fontSize = getComputedStyle(elem).fontSize;
    console.log(parseFloat(fontSize)); // Поверне число без "px"
});
