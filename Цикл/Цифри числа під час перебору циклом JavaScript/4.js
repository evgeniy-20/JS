// Переберіть циклом числа від 10 до 1000 і виведіть на екран ті числа, сума двох перших цифр яких дорівнює 5.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let firstDigit = Number(str[0]);
    let secondDigit = Number(str[1]);
    let sum = firstDigit + secondDigit;
    if (sum === 5) {
        console.log(i);
    }
}
