// Виведіть у консоль суму результатів роботи функцій func1 та func2.

function func1() {
    return 3;
}

let func2 = func1;

console.log(func1() + func2());
