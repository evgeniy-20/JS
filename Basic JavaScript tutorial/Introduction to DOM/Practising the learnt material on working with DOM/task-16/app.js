// Дано інпут. Реалізуйте кнопочки +1, -1, які збільшуватимуть або зменшуватимуть на 1 значення інпута. Зробіть так, щоб це значення не могло стати меншим за нуль.

let valueInput = document.querySelector('#value');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    valueInput.value = parseInt(valueInput.value) + 1;
});

btn2.addEventListener('click', () => {
    let currentValue = parseInt(valueInput.value);
    if (currentValue > 0) {
        valueInput.value = currentValue - 1;
    }
});
