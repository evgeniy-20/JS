// Дано елемент і кнопку. Після натискання на кнопку прокрутіть елемент до самого низу.

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.scrollTop = elem.scrollHeight = elem.clientHeight;
})
