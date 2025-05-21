// Дано кнопку і три інпута, у які вводяться числа. Після натискання на кнопку виведіть у консоль суму введених чисел. Реалізуйте завдання за допомогою модуля.

// Створюємо модуль
const sumModule = (function () {
    let num1, num2, num3
    return {
        setNumbers: function (n1, n2, n3) {
            num1 = n1;
            num2 = n2;
            num3 = n3;
        },
        getSum: function () {
            return num1 + num2 + num3;
        }
    }
})();

// Додаємо обробник події ПІСЛЯ створення модуля
const button = document.querySelector('.sumBtn');

button.addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    const n1 = Number(inputs[0].value);
    const n2 = Number(inputs[1].value);
    const n3 = Number(inputs[2].value);

    sumModule.setNumbers(n1, n2, n3);
    console.log(sumModule.getSum());
});
