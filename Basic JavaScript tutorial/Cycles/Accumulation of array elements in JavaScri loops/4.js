// Даний масив: Знайдіть добуток елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let product = 1;
for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}

console.log(product);
