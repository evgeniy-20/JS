// Перевірте різні типи відомих вам ітерованих об'єктів на наявність у них описаної функції.

const array = [1, 2, 3, 4, 5];
const string = 'Hello';
const set = new Set([1, 2, 3]);
const map = new Map([
    ['key1', 'key2']
])

function checkIterator(obj) {
    if (typeof obj[Symbol.iterator] === 'function') {
        console.log(`${Object.prototype.toString.call(obj)} — має ітератор`);
    } else {
        console.log(`${Object.prototype.toString.call(obj)} — не має ітератора`);
    }
}

// Перевірка
checkIterator(array);  // Array
