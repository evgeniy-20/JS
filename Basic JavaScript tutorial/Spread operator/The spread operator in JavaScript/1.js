// Даний масив:

let arr = [1, 2, 3, 4, 5];
// Дана також функція:

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

// Знайдіть за допомогою наведеної функції суму елементів масиву.

console.log(func(...arr));
