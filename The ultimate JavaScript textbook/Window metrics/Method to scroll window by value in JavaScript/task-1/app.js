// Після натискання на кнопку прокрутіть вікно на 100px вниз.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.scrollBy({
        top: 100,
        behavior: 'smooth'
    })
});
