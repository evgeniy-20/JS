// Даний абзац з тексту та кнопки. За натисканням на кнопку запишіть в кінець тексту абзацу знак оклику.

let str = document.querySelector('#str');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    str.textContent += '!';
});
