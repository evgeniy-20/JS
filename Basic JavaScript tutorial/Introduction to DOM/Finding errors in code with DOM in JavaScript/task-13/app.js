// До інпутів вводяться числа. За натисканням кнопки в консоль повинна вивестися сума введених чисел:

let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let sum = 0;
    for (let input of inputs) {
        sum += Number(input.value);
    }
    console.log(sum);
});
