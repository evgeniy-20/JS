// Переберіть створений вами масив arr циклом та виведіть результати роботи всіх функцій у консоль.

let arr = [
    function () { return 1 },
    function () { return 2 },
    function () { return 3 }
]

for (let func of arr) {
    console.log(func());
}
