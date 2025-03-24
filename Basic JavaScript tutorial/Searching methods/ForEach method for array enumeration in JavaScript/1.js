// Дано масив із числами. Використовуючи метод forEach знайдіть суму квадратів елементів цього масиву.

let arr = [1, 2, 3, 4, 5];
let sum = 0;
let newArray = arr.forEach(function (item) { return sum += Math.pow(item, 2) });
console.log(sum);
