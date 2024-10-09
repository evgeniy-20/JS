// Дано два інпути, абзац та посилання. Нехай до інпутів вводяться числа. Зробіть так, щоб на кліку на посилання в абзац записалася сума введених чисел.
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let sum = document.querySelector('#sum');
let result = document.querySelector('#result');

sum.addEventListener('click', function (event) {
    event.preventDefault();
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let total = value1 + value2;

    result.textContent = `Результат: ${total}`;
});
