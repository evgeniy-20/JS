// Дана картинка в тегу imgта кнопка. Після натискання кнопки атрибута width запишіть значення 300.

let img = document.querySelector('#img');
let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    elem.textContent = img.width;
})
