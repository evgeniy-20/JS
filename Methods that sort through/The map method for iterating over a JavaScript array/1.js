// Даний масив із числами. Використовуючи метод, map вийміть із кожного елемента масиву квадратний корінь і запишіть результат у новий масив.

let arr = [4, 9, 16, 25, 36];

let newArr = arr.map(function (elem) {
    return Math.sqrt(elem);
});

console.log(newArr);
