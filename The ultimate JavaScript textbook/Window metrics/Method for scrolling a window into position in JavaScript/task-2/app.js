// Після натискання на кнопку плавно прокрутіть вікно до самого верху.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
