// Перевірте роботу цього ітератора на колекції Map.

let arr = [1, 2, 3, 4, 5];
let map = new Map();
let iter = arr.entries();
for (let item of iter) {
    map.set(item[0], item[1]);
    console.log(item);
}
