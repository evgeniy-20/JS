// Даний масив із рядками. Використовуючи метод, map переверніть символи кожного рядка у зворотному порядку.

let str = ['Stas', 'Yura', 'Yevhen'];

let result = str.map(function (elem) {
    return str.split('').reverse().join('');
});

console.log(result);
