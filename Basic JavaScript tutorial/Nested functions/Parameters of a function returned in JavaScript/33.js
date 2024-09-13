// Зробіть функцію func, яка після виклику ось так: func(2)(3)(4), поверне суму переданих у параметри чисел.

function func(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(func(2)(3)(4));
