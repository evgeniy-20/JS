// Отримайте ітератор колекції Map. Послідовно викликайте його, поки елементи колекції не закінчаться.

const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

const iter = map[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
