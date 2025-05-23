// Дана також кнопка. За кліком на кнопку виведіть товщину межі, її тип і колір.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    console.log(elem.style.borderWidth);
    console.log(elem.style.borderStyle);
    console.log(elem.style.borderColor);
})
