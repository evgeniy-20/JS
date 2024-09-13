// Зробіть функцію func, яка параметрами прийматиме два числа, а повертатиме суму квадрата першого числа з кубом другого числа. Зробіть для цього допоміжну функцію square, що зводить число в квадрат, і допоміжну функцію cube, що зводить число в куб.
function getSqrt(num1) {
    return Math.pow(num1, 2);
}
function getCub(num2) {
    return Math.pow(num2, 3);
}

function func(num1, num2) {
    return getSqrt(num1) + getCub(num2);
};

console.log(func(3, 5));
