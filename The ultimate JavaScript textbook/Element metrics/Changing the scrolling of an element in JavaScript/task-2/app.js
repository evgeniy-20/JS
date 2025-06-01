// Дано елемент і кнопку. Після натискання на кнопку прокрутіть елемент на 50px вниз від поточного положення прокрутки.
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.scrollTop += 50;
})
