// Дано абзац із числом і кнопку. Після натискання на кнопку додайте до значення абзацу одиницю і запишіть отримане число назад.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.textContent = Number(elem.textContent) + 1;
})
