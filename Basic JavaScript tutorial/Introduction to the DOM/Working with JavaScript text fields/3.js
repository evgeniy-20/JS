// Дано два інпути та кнопка. У перший інпут користувача вводиться число. Натиснувши кнопку, запишіть у другий інпут квадрат введеного числа.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    let num = Number(num1.value);
    let square = Math.pow(num, 2);
    num2.value = square;
});
