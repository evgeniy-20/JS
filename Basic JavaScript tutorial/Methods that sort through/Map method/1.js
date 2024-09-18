// Дано масив із числами. Використовуючи метод map, витягніть із кожного елемента масиву квадратний корінь і запишіть результат у новий масив.

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {
    return Math.sqrt(elem);
});

console.log(result);
