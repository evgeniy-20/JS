// Даний масив із рядками. Використовуючи метод map в кінці значення кожного елемента масиву додайте символ '!'.

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {
    return elem + '!';
});

console.log(result);
