// Дано 5 інпутів, абзац і кнопку. В інпут вводяться числа. Після натискання на кнопку запишіть середнє арифметичне введених чисел в абзац.

let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let input5 = document.querySelector('#input5');
let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let num3 = Number(input3.value);
    let num4 = Number(input4.value);
    let num5 = Number(input5.value);
    let average = (num1 + num2 + num3 + num4 + num5) / 5;
    elem.textContent = `Середнє арифметичне: ${average}`;
});
