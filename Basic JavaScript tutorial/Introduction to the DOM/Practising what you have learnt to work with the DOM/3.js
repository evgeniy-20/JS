// Дано інпут. У нього вводиться число. Після втрати фокуса знайдіть суму цифр цього числа.

let inp = document.querySelector('#inp');
let result = document.querySelector('#result');

inp.addEventListener('blur', function () {
    let value = inp.value;
    let digits = value.split('');
    let sum = 0;
    for (let digit of digits) {
        sum += Number(digit);
    }
    result.textContent = sum;
});
