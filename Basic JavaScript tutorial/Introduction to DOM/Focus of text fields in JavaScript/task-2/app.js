// Дано інпут. Нехай у нього вводиться число. Після втрати фокуса виведіть на екран квадрат цього числа.

let elem = document.querySelector('#elem');

elem.addEventListener('blur', function () {
    let value = Number(elem.value)
    if (!isNaN(value)) {
        elem.value = Math.pow(value, 2);
    } else {
        elem.value = '';
    }
})
