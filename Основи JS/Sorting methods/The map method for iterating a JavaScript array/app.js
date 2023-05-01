//Даний масив із числами. Використовуючи метод map , вийміть із кожного елемента масиву квадратний корінь і запишіть результат у новий масив.

let arr = [1,2,3,4,5];

let result = arr.map(elem => {
    return Math.sqrt(elem, 2);
})
console.log(result);

//Дано масив з рядками. Використовуючи метод map в кінці значення кожного елемента масиву додайте символ '!'.

let str = ['Volodymyr', 'Tetiana', 'Stas', 'Yura', 'Yevhen'];

let result1 = str.map(elem => {
    return elem + '!';
})
console.log(result1);

//Дано масив з рядками. Використовуючи метод map , переверніть символи кожного рядка у зворотному порядку.

let str1 = ['Volodymyr', 'Tetiana', 'Stas', 'Yura', 'Yevhen'];

let result2 = str1.map(elem => {
    return elem.reversed();
})
console.log(result2);