// До інпутів вводяться числа. По кліку на кнопку в консоль повинна вивестись сума чисел з інпутів:

let button = document.querySelector('button');
let elems = document.querySelectorAll('input');

button.addEventListener('click', function () {
    let sum = 0;

    for (let elem of elems) {
        sum += Number(elem.value);
    }
    console.log(sum);
});
