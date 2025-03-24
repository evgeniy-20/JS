// Дано масив із рядками. Використовуючи метод map, переверніть символи кожного рядка у зворотному порядку.

let arr = ['Stas', 'Yura', 'Yevhen'];
let newArray = arr.map((item) => item.split('').reverse().join(''));
console.log(newArray);
