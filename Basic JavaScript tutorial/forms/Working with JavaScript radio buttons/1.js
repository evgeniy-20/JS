// Дані 3 радіокнопки, абзац та кнопка. Натисніть кнопку, щоб вивести в абзац value зазначеної радіокнопки.
let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            elem.textContent = radio.value;
            break;
        }
    }
});
