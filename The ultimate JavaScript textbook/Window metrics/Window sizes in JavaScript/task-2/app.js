// Після натискання на кнопку перевірте наявність вертикальної прокрутки у вікна.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(w);
    console.log(h);
    if (window.innerHeight < document.documentElement.scrollHeight) {
        console.log('Vertical scrollbar is present');
    } else {
        console.log('Vertical scrollbar is not present');
    }
})
