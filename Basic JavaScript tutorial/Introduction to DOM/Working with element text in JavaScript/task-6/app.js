// Дано абзац із текстом і кнопку. Після натискання на кнопку запишіть у кінець тексту абзацу знак оклику.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.textContent += '!';
})
