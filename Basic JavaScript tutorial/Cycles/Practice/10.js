// Даний масив із числами. Знайдіть середнє арифметичне його елементів.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;

console.log(average);
