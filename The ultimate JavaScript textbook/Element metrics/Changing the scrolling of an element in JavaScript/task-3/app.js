// Дано елемент і кнопку. Після натискання на кнопку прокрутіть елемент у самий верх.
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.scrollTop = 0;
})
