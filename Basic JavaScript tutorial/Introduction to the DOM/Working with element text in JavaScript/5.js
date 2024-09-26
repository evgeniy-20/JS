// Дано абзац із числом і кнопку. Після натискання на кнопку додайте до значення абзацу одиницю і запишіть отримане число назад.

let num1 = document.querySelector('#num1');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let value1 = Number(num1.textContent);
    num1.textContent = value1 + 1;
});
