// Дано 3інпуту, в яких записані якісь числа. За втрати фокусу в будь-якому з інпутів зведіть число, що стоїть у ньому, в квадрат.

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');

input1.addEventListener('blur', squareValue);
input2.addEventListener('blur', squareValue);
input3.addEventListener('blur', squareValue);

function squareValue() {
    let value = Number(this.value);
    if (!isNaN(value)) {
        this.value = value ** 2;
    }
}
