// Даний масив із рядками. Використовуючи метод map в кінці значення кожного елемента масиву додайте символ '!'.

let arr = ['Stas', 'Yura', 'Yevhen'];

let newArr = arr.map(function (elem) {
    return elem += '!';
})

console.log(newArr);
