// Дано інпут, кнопку й абзац. В інпут вводиться число. Після натискання на кнопку виведіть в абзац факторіал цього числа.

function factorial(n) {
    if (n < 0) return 0; // Факторіал для від'ємних чисел не визначений
    if (n === 0 || n === 1) return 1; // Факторіал 0 і 1 дорівнює 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Множимо числа від 2 до n
    }
    return result;
}

document.querySelector('#calculateButton').addEventListener('click', function () {
    const number = parseInt(document.querySelector('#numberInput').value);
    const factorialResult = factorial(number);
    document.querySelector('#factorialOutput').textContent = `Факторіал числа ${number} = ${factorialResult}`;
});
