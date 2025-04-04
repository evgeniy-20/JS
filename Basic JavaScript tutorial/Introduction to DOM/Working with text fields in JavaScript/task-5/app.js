// Дано 5 інпутів, абзац і кнопку. В інпут вводяться числа. Після натискання на кнопку запишіть середнє арифметичне введених чисел в абзац.

let numbers = document.querySelectorAll('.number-input'); // Отримуємо всі інпути
let result = document.querySelector('#result');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let sum = 0;
    let count = 0;

    numbers.forEach(input => {
        let value = parseFloat(input.value); // Конвертуємо введене значення у число
        if (!isNaN(value)) { // Переконуємося, що це число
            sum += value;
            count++;
        }
    });

    let average = count > 0 ? sum / count : 0; // Уникаємо ділення на 0
    result.textContent = `Середнє арифметичне: ${average.toFixed(2)}`;
});
