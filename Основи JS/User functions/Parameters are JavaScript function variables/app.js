//Зробіть функцію func, яка параметром прийматиме 3числа і виводитиме в консоль їхню суму. Нехай дані 3змінні з числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// За допомогою створеної вами функції виведіть у консоль суму цих змінних значень.
let param1 = 1;
let param2 = 2;
let param3 = 3;

const getParam = (param1, param2, param3) => {
    let sum =  param1 + param2 + param3;
    return sum;
}
console.log(getParam(param1, param2, param3));
