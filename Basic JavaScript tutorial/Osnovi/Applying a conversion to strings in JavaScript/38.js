// Дано дві змінні з числами. Знайдіть кількість цифр в одному і другому числі, результати складіть і виведіть на екран.

let num1 = 1245;
let num2 = 12456789;

let str1 = String(num1).length;
let str2 = String(num2).length;

let result = Number(str1) + Number(str2);

console.log(result);
