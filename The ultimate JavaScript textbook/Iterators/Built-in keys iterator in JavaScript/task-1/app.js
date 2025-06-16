// Перевірте роботу цього ітератора на колекції Map.

let map = new Map();
let iterator = map.keys();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let value of iterator) {
    console.log(value);
}
