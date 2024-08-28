// Даний масив: Знайдіть добуток елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let product = 1;
for (let elem of arr) {
    product *= elem;
}

console.log(product);
