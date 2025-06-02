// Дано елемент і кнопку. Після натискання на кнопку прокрутіть сторінку до цього елемента. Спробуйте всі описані можливості.
let elm = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    elm.scrollIntoView({
        behavior: 'smooth',
        inline: 'end',
    });
});
