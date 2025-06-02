// Після натискання на кнопку прокрутіть вікно в позицію 300px зверху.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.scrollTo({
        top: 300,
        behavior: 'smooth'
    })
});
