// Після натискання на кнопку плавно прокрутіть вікно на 300px вниз.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.scrollBy({
        top: 300,
        behavior: 'smooth'
    })
});
