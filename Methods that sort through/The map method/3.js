// Даний масив із рядками. Використовуючи метод, map переверніть символи кожного рядка у зворотному порядку.

let arr = ['Stas', 'Yura', 'Yevhen'];

let newArr = arr.map(function (elem) {
    return elem.split('').reverse().join('');
})

console.log(newArr);
