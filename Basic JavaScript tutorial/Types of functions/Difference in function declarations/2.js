// Створіть функцію як Function Expression. Переконайтеся, що вона не буде доступна вище місця оголошення.

console.log(func());
let func = function () {
    return 'Hello';
}
