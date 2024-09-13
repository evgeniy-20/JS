// Зробіть функцію func1, яка, якщо її викликати ось так: func1()(), поверне число 1. Зробіть аналогічну функцію func2, яка повертає число 2. Знайдіть суму результатів цих функцій.

function func1() {
    return function () {
        return 1;
    };
}

function func2() {
    return function () {
        return 2;
    };
}

let sum = func1()() + func2()();

console.log(sum);
