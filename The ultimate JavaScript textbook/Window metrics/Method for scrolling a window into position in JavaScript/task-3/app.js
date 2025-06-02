// Після натискання на кнопку плавно прокрутіть вікно до самого низу.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
});
