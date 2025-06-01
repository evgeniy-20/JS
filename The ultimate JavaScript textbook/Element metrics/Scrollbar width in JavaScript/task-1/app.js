// Дана кнопка. Після натискання на кнопку отримаєте ширину смуги прокрутки у вашому браузері.

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    topText.textContent = `Ширина смугм прокрутки: ${scrollBarWidth}px`;
    elem.style.width = `calc(100% - ${scrollBarWidth}px)`;
    elem.style.overflow = 'scroll';
})
