// Даний масив: Знайдіть суму квадратів елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let elem of arr) {
    sum += Math.pow(elem, 2);
}

console.log(sum);
