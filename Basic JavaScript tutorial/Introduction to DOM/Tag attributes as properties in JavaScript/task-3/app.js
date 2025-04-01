// Нехай у вас є посилання у вигляді тега a, кнопка й абзац. Після натискання на кнопку виведіть в абзац вміст атрибута href посилання.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    result.innerHTML = elem.href;
})
