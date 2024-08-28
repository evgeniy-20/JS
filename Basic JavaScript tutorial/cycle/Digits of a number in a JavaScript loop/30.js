// Переберіть циклом числа від 10 до 1000 та виведіть у консоль суму першої та другої цифри кожного числа.

for (let i = 10; i < 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    console.log(sum);
}
