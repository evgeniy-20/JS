// Даний селект, абзац та кнопка. Натисніть кнопку, щоб вивести текст вибраного пункту списку в абзац.

let select = document.querySelector('#select');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function () {
    elem.textContent = select.value;
})
