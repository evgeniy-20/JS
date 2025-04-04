// Дана також кнопка. Після натискання на кнопку запишіть в атрибут class нашого діва який-небудь клас.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.className = 'content no-gap';
})
