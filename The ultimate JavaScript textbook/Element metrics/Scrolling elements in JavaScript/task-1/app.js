// Дано елемент і кнопку. За натисканням на кнопку дізнайтеся на скільки прокручений елемент по вертикалі.

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    topText.innerHTML = 'T: ' + elem.scrollTop + 'px';
})
