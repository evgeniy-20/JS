// Дано інпут. У нього вводяться числа через кому. По втраті фокуса знайдіть середнє арифметичне цих чисел (суму ділити на кількість).

let num = document.querySelector('#numbers');
let result = document.querySelector('#result')
num.addEventListener('blur', function () {
    let values = num.value.split(',').map(Number).filter(n => !isNaN(n));
    let average = values.reduce((a, b) => a + b, 0) / values.length || 0;
    result.textContent = `Середнє: ${average.toFixed(2)}`;
})
