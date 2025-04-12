// Дано інпут, кнопку й абзац. В інпут вводиться число. Після натискання на кнопку виведіть в абзац факторіал цього числа.

let input = document.querySelector('#numberInput');
let button = document.querySelector('#calcBtn');
let output = document.querySelector('#output');

button.addEventListener('click', () => {
    let num = parseInt(input.value);

    if (isNaN(num) || num < 0) {
        output.textContent = 'Введіть невід’ємне ціле число!';
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    output.textContent = `Факторіал ${num} = ${factorial}`;
});
