// Використовуючи цикл, перевірте, чи є у масиві від'ємні числа.

let arr = [1, 2, 3, 4, 5, -6];
let hasNegative = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        hasNegative = true;
        break; // Виходимо з циклу, оскільки знайшли від'ємне число
    }
}
