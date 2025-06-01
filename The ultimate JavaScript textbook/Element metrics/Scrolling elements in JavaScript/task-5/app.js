// Складіть offsetHeight і величину повної прокрутки. Відніміть цю суму від значення scrollHeight. Яке число вийде?

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top');
let button = document.querySelector('.button');
let scrollToEndBtn = document.querySelector('.scrollToEnd'); // ← додано

button.addEventListener('click', function () {
    topText.innerHTML = 'T: ' + elem.scrollTop + 'px';
});

scrollToEndBtn.addEventListener('click', function () {
    let sum = elem.offsetHeight + elem.scrollTop;
    elem.scrollTop = elem.scrollHeight - sum;
});
