// Після натискання на кнопку перевірте наявність горизонтальної прокрутки у вікна.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(w);
    console.log(h);
    if (window.innerWidth < document.documentElement.scrollWidth) {
        console.log('Horizontal scrollbar is present');
    } else {
        console.log('Horizontal scrollbar is not present');
    }
})
