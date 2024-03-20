// Напишіть функцію, яка видаляє певну кількість символів з початку рядка та повертає результат. Використайте метод slice.

function removeCharsFromStart(str, count) {
    return str.slice(count);
}

let str = 'Yevhen';
let count = 2;

console.log(removeCharsFromStart(str, count));
