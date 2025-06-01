// Дано елемент і кнопку. Після натискання на кнопку прокрутіть елемент на положення прокрутки 100px по вертикалі і 50px по горизонталі.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.scrollTop = 100;
    elem.scrollLeft = 50;
})
