// Після натискання на кнопку прокрутіть вікно на самий низ.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    const startScroll = window.scrollY;
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    console.log('Початкова позиція: ' + startScroll + 'px');
});
