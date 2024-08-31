// Виведіть на екран випадкове ціле число від 1 до 100.

function getRandon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandon(1, 100));
