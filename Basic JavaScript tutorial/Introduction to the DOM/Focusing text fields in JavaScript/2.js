// Даний інпут. Нехай до нього вводиться число. Після втрати фокусу виведіть на екран квадрат цього числа.

let elem = document.querySelector('#elem');

elem.addEventListener('blur', function () {
    let value = elem.value;
    let square = Math.pow(value, 2);
    console.log(square);
});
