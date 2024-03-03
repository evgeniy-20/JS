// Даний масив із числами. Переберіть його циклом і запишіть у новий масив лише позитивні числа.

let arr = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
let newArr = [];

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
