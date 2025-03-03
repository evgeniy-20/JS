// Виведіть на екран випадкове ціле число від 1 до 100.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 100));
