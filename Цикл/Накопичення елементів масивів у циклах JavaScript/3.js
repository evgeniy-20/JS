// Даний масив: let arr = [2, 5, 9, 3, 1, 4]; Знайдіть суму квадратів елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
}

console.log(sum);
