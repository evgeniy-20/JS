// Даний масив із числами. Переберіть його циклом і запишіть у новий масив лише позитивні числа.

let arr = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
