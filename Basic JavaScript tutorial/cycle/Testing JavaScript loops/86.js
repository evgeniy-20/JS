// Напишіть скрипт, який знаходитиме факторіал числа. Факторіал - це добуток усіх цілих чисел від одиниці до заданого числа.

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Приклад використання:
let number = 5; // Задайте число, для якого потрібно знайти факторіал
let result = calculateFactorial(number);
console.log(`Факторіал числа ${number} дорівнює ${result}`);
