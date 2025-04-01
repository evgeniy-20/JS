// Дана картинка в тезі img і кнопка. Після натискання на кнопку в атрибут width запишіть значення 300.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.width = 300;
})
