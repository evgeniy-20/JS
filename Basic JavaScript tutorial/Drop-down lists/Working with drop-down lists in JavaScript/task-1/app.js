// Дано селект, абзац і кнопку. За кліком на кнопку виведіть текст обраного пункту списку в абзац.

let selected = document.querySelector('#selected');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

btn.addEventListener('click', function () {
    let selectedValue = selected.value;
    result.textContent = `Вибираю це ім'я: ${selectedValue}`;
})
