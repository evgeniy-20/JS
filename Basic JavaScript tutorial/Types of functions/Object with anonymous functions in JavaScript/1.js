// Зробіть об'єкт із трьома функціями. Нехай перша повертає через return число 1, друга-число 2, третя-число 3. За допомогою створених функцій виведіть у консоль суму чисел, що повертаються.

let obj = {
    func1: function () { return 1 },
    func2: function () { return 2 },
    func3: function () { return 3 }
}

console.log(obj.func1() + obj.func2() + obj.func3());
