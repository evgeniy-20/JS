// Даний масив із числами. Використовуючи метод, forEach знайдіть суму квадратів елементів цього масиву.

let arr = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

arr.forEach(function (elem) {
    sumOfSquares += Math.pow(elem, 2);
});

console.log(sumOfSquares);
