//Дано 5 абзаців з якимись текстами. За кліком на будь-який абзац запишіть в кінець його тексту знак оклику.

let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');
let text4 = document.querySelector('#text4');
let text5 = document.querySelector('#text5');

text1.addEventListener('click', func);
text2.addEventListener('click', func);
text3.addEventListener('click', func);
text4.addEventListener('click', func);
text5.addEventListener('click', func);
function func() {
    this.textContent = this.textContent + '!';
}
//Дано 3інпуту, в яких записані якісь числа. За втрати фокусу в будь-якому з інпутів зведіть число, що стоїть у ньому, в квадрат.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
num1.addEventListener('blur', func1);
num2.addEventListener('blur', func1);
num3.addEventListener('blur', func1);
function func1() {
    this.value = Math.pow(parseInt(this.value), 2);
}