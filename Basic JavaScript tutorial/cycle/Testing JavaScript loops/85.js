// Даний масив із числами. Знайдіть середнє арифметичне його елементів.

let arr = [1, 2, 3, 4, 14, 15, 16, 65, 75, 35, 45, 25];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let result = sum / arr.length;
console.log(result);
