// Нехай у вас є функція, що повертає квадратний корінь з числа, і функція, що повертає суму трьох чисел:

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

// За допомогою цих функцій знайдіть суму коренів чисел 2, 3 і 4 і запишіть її у змінну res.
let res = sqrt(sum(2, 3, 4));
console.log(res);
