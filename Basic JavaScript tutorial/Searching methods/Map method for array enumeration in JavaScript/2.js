// Дано масив із рядками. Використовуючи метод map у кінець значенню кожного елемента масиву додайте символ '!'.

let arr = ['Stas', 'Yura', 'Yevhen'];
let newArray = arr.map((item) => item + '!');
console.log(newArray);
