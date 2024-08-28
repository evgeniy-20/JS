// Даний масив із числами. За допомогою циклу знайдіть суму квадратів елементів цього масиву.

let arr = [1, 2, 3, 4, 14, 15, 16, 65, 75, 35, 45, 25];
let squert = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    squert = Math.pow(arr[i], 2);
    sum += squert;
}

console.log(sum);
