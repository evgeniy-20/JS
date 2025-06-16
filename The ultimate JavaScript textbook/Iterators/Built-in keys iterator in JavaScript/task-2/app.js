// Перевірте роботу цього ітератора на колекції Set.

let set = new Set();
let iterator = set.keys();
set.add('a');
set.add('b');
set.add('c');
for (let value of iterator) {
    console.log(value);
}
