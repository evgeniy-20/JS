// Даний масив із числами. Знайдіть середнє арифметичне його елементів.

let arr = [1, 2, 15, 7, 17, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let arithmeticAverage = sum / arr.length;
console.log(sum);
console.log(arithmeticAverage);
