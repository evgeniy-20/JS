// Нехай у вас є функція, що повертає квадратний корінь з числа, і функція, що повертає суму трьох чисел:

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);
// За допомогою цих функцій знайдіть суму коренів чисел 2і 3запишіть 4її в змінну res.
