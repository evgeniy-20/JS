// Зробіть функцію func, яка параметрами прийматиме два числа, а повертатиме суму квадрата першого числа з кубом другого числа. Зробіть для цього допоміжну функцію square, що зводить число в квадрат, і допоміжну функцію cube, що зводить число в куб.

function func(num1, num2) {
    function square(num1) {
        return Math.pow(num1, 2);
    }
    function cube(num2) {
        return Math.pow(num2, 3);
    }
    return square(num1) + cube(num2);
}

console.log(func(2, 3));
