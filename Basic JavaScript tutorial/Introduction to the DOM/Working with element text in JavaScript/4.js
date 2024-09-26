// Дано три абзаци з числами, див, і кнопку. Після натискання на кнопку запишіть у текст дива суму чисел.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let value1 = Number(num1.textContent);
    let value2 = Number(num2.textContent);
    let value3 = Number(num3.textContent);
    let sum = value1 + value2 + value3;
    result.textContent = sum;
});
