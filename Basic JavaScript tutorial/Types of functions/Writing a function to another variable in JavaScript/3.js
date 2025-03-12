// Виведіть у консоль суму результатів роботи функцій func1та func2

function func1() {
    return 3;
}

let func2 = func1;
let sum = func1() + func2();
console.log(sum);
