// Нехай передана функція тепер приймає два параметри і повертає їхню суму. При виклику переданої функції всередині test передайте в передану функцію число 2 і число 3. Виведіть алертом результат.

test(function (num1, num2) {
    return num1 + num2;
})

function test(func) {
    console.log(func(5, 6));
}
