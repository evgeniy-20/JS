// Поясніть, у чому помилка в такому коді:

let elem = document.querySelector('div');
let elemStyle = getComputedStyle(elem);
let fontSize = elemStyle.fontSize; // наприклад, '16px'
let fontSizeValue = parseFloat(fontSize) + 2; // результат: 18
