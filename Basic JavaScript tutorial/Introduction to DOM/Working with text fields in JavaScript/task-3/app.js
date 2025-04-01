// Дано два інпути та кнопку. У перший інпут користувач вводить число. Після натискання на кнопку запишіть у другий інпут квадрат введеного числа.

let number = document.querySelector('#number');
let squer = document.querySelector('#squer');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let num = Number(number.value);
    squer.value = Math.pow(num, 2);
})
