// filter та map: Дано масив чисел: javascript Копіювати код Завдання: Виберіть тільки додатні числа.
// Знайдіть квадрат кожного з них і створіть новий масив.

let numbers = [10, -5, 7, -2, 3, 0];
let arr = numbers.filter(num => num > 0);
let newArr = arr.map(num => Math.pow(num, 2));
console.log(arr);
console.log(newArr);
