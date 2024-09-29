// Дано кілька інпутів, абзац і кнопку. Після натискання на кнопку отримайте числа, що стоять у цих інпутах і запишіть їхню суму в абзац.

let inp1 = document.querySelector('#num1');
let inp2 = document.querySelector('#num2');
let button = document.querySelector('#sum');
let result = document.querySelector('#result');

button.addEventListener('click', function () {
    let value1 = Number(inp1.value);
    let value2 = Number(inp2.value);
    result.textContent = value1 + value2;
})
