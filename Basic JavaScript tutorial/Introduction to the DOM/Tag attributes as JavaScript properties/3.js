// Нехай у вас є посилання у вигляді тега a, кнопка та абзац. Після натискання кнопки виведіть в абзац вміст атрибута hrefпосилання.

let company = document.querySelector('#company');
let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    elem.innerHTML = company.href;
})
