// Напишіть скрипт, який знаходитиме факторіал числа. Факторіал - це добуток усіх цілих чисел від одиниці до заданого числа.
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= n;
}

console.log(factorial);
