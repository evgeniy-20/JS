// Дано масив: Дано також функцію: Знайдіть за допомогою наведеної функції суму елементів масиву.

let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arr));
