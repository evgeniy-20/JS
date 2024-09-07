// Переберіть створений вами масив arr циклом та виведіть результати роботи всіх функцій у консоль.

let arr = [
    function func1() { return 1 },
    function func2() { return 2 },
    function func3() { return 3 },
]

for (let func of arr) {
    console.log(func());
}
