// Дана також кнопка. Після натискання на кнопку запишіть в атрибут typeзначення submit.

let elem = document.querySelector('#elem');
let buttom = document.querySelector('#buttom');
buttom.addEventListener('click', function () {
    elem.type = 'submit';
})
