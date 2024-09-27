// Дана також кнопка. Після натискання на кнопку запишіть в атрибут classнашого діва якийсь клас.

let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    elem.className = 'content no-gap';
})
