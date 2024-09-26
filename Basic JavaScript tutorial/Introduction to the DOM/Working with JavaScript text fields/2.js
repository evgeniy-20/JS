// Даний інпут, абзац та кнопка. Натиснувши кнопку, запишіть в абзац текст з інпуту.

let input = document.querySelector('#input');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    elem.textContent = input.value;
});
