// Даний масив із числами. Числа можуть бути позитивними та негативними. Знайдіть суму позитивних елементів масиву.

let arr = [1, 2, 3, 4, 5, -6, -7, -8, -9];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);
