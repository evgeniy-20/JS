// Після натискання на кнопку прокрутіть вікно на самий верх.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    const startScroll = window.scrollY;
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log('Початкова позиція: ' + startScroll + 'px');
});
