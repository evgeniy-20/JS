// Після натискання на кнопку прокрутіть вікно на позицію 100px знизу.

let button = document.querySelector('.button');

button.addEventListener('click', function () {
    const startScroll = window.scrollY;
    window.scrollTo({ top: document.body.scrollHeight - 100, behavior: "smooth" });
    console.log('Початкова позиція: ' + startScroll + 'px');
});
