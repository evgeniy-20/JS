// Переберіть створений об'єкт циклом та виведіть результати роботи функцій у консоль.

let obj = {
    func1: function () { return 1 },
    func2: function () { return 2 },
    func3: function () { return 3 },
}

for (let elem in obj) {
    console.log(obj[elem]());
}
