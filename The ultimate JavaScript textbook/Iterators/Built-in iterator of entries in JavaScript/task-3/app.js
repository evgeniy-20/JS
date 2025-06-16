// Перевірте роботу цього ітератора на колекції NodeList.

let arr = [1, 2, 3, 4, 5];
let set = new Set();
let iter = arr.entries();
for (let item of iter) {
    set.add(item[1]);
    console.log(item);
}
