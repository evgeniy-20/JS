// Дано інпут. Реалізуйте кнопочки +1, -1, які збільшуватимуть або зменшуватимуть на 1 значення інпута. Зробіть так, щоб це значення не могло стати меншим за нуль.

let input = document.querySelector('#numberInput');
let incrementButton = document.querySelector('#increment');
let decrementButton = document.querySelector('#decrement');

incrementButton.addEventListener('click', function () {
    let currentValue = Number(input.value);
    input.value = currentValue + 1;
});

decrementButton.addEventListener('click', function () {
    let currentValue = Number(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
});
