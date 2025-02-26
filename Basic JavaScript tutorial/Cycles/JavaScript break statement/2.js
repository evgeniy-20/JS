// Даний масив із числами. Знайдіть суму елементів, розташованих від початку масиву до першого від'ємного числа.

let arr = [1, 2, -3, 4, 5];
let sum = 0;
for (let elem of arr) {
    if (elem < 0) {
        break;
    }

    sum += elem;
}

console.log(sum);
