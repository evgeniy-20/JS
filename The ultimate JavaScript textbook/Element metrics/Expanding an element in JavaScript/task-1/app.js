// Дано елемент і кнопку. Після натискання на кнопку розкрийте елемент на всю висоту.

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.style.height = elem.scrollHeight + 'px'
})
