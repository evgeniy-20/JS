// Дано два абзаци, що містять своїм текстом якісь числа, і кнопку. Після натискання на кнопку виведіть на екран суму чисел, що зберігаються

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let value1 = Number(num1.textContent);
    let value2 = Number(num2.textContent);
    let sum = value1 + value2;
    console.log(sum);
});
