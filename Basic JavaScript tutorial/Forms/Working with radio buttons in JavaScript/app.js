// Дано 3 радіокнопки, абзац і кнопку. За кліком на кнопку виведіть в абзац value зазначеної радіокнопки.

let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            result.innerHTML = radio.value;
            break; // зупиняємо цикл, бо знайшли вибране
        }
    }
})
