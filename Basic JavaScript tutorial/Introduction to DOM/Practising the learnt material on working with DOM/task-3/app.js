// Дано інпут. У нього вводиться число. Після втрати фокуса знайдіть суму цифр цього числа.

let input = document.querySelector('#input');
input.addEventListener('blur', function () {
    let sum = 0;
    let value = input.value;
    for (let i = 0; i < value.length; i++) {
        sum += Number(value[i]);
    }
    console.log(sum);
})
