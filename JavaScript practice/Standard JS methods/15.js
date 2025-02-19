// Дано масив чисел: Знайдіть суму всіх елементів. Перемножте всі елементи масиву.

let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((total, num) => total + num);
let dobut = nums.reduce((total, num) => total * num);
console.log(sum);
console.log(dobut);
