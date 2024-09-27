// Дана також кнопка. Після натискання на кнопку прочитайте та виведіть на екран значення атрибута class нашого дива.

let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    console.log(elem.className);
})
