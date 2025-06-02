// Після натискання на кнопку прокрутіть вікно на позицію 300px зверху.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    const startScroll = window.scrollY;
    window.scrollTo({ top: 300, behavior: "smooth" });
    console.log('Початкова позиція: ' + startScroll + 'px');
});
