// Даний масив із числами. Переберіть цей масив циклом і зведіть кожен елемент масиву в квадрат.

let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2)
}

console.log(arr);
