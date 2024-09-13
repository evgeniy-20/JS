// Зробіть функцію func, яка після виклику ось так: func(2)(3)(4)(5)(), поверне масив переданих у параметри чисел.

function func(num1) {
    let numbers = [num1];
    function inner(num) {
        if (num === undefined) {
            return numbers;
        }
        numbers.push(num);
        return inner;
    }

    return inner;
}

console.log(func(2)(3)(4)(5)());
