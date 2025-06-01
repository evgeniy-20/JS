// Дано елемент і кнопку. Після натискання на кнопку перевірте, чи прокручений елемент по вертикалі.
let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    if (elem.scrollTop > 0) {
        console.log('Елемент прокручено по вертикалі.');
    } else {
        console.log('Елемент НЕ прокручено по вертикалі.');
    }
})
