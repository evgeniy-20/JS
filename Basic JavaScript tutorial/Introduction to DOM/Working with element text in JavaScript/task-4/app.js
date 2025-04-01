// Дано три абзаци з числами, див, і кнопку. Після натискання на кнопку запишіть у текст дива суму чисел.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let result = document.querySelector('#result');
let button = document.querySelector('#button')
button.addEventListener('click', function () {
    let sum = Number(num1.textContent) + Number(num2.textContent);
    result.textContent += sum;
})
