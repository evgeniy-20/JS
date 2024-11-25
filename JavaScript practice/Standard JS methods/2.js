// Строки: Зроби першу літеру кожного слова у строкі великою (наприклад, "hello world" → "Hello World").

let str = 'yevhen prokopiv';
let newStr = str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

console.log(newStr);
