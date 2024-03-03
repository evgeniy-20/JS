// Переберіть циклом числа від 10 до 1000 і виведіть у консоль суму першої та другої цифри кожного числа.
let sum = 0;
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str.length >= 2) {
        sum += Number(str[0]) + Number(str[1]);
    }
}

console.log(sum);
