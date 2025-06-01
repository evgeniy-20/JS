// Дано елемент і кнопку. Після натискання на кнопку прокрутіть елемент у самий низ.
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.scrollTop = elem.scrollHeight;
})
