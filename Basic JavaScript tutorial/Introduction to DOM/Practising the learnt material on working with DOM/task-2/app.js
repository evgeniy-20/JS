// Дано кілька інпутів, абзац і кнопку. Після натискання на кнопку отримайте числа, що стоять у цих інпутах і запишіть їхню суму в абзац.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let sum = Number(num1.value) + Number(num2.value);
    result.textContent += sum;
})
