// В інпут вводяться числа. За натисканням кнопки на консоль повинна вивестися сума введених чисел:

let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');
let sum = 0;

btn.addEventListener('click', function () {
    sum = 0;
    for (let input of inputs) {
        sum += Number(input.value);
    }

    console.log(sum);
});
