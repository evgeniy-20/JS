// Даний абзац та кнопка. Натисніть кнопку, щоб записати в абзац новий текст.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.textContent = 'Новий текст';
});
