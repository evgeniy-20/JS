// Дана також кнопка. За кліком на кнопку виведіть ширину і висоту діва без одиниць виміру.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    let width = elem.offsetWidth;
    let height = elem.offsetHeight;
    console.log(parseInt(width));
    console.log(parseInt(height));
});
