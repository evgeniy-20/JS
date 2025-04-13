// Дано абзац. Дано кнопки 'перекреслити', 'зробити жирним', 'зробити червоним'. Нехай після натискання на кожну кнопку задана дія відбувається з абзацом (стає червоним, наприклад).

let name = document.querySelector('#name');
let strikethrough = document.querySelector('#strikethrough');
let bold = document.querySelector('#bold');
let red = document.querySelector('#red');

strikethrough.addEventListener('click', function () {
    name.classList.add('strikethrough');
});

bold.addEventListener('click', function () {
    name.classList.add('bold');
});

red.addEventListener('click', function () {
    name.classList.add('red');
});
