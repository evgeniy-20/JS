// Даний масив: За допомогою рекурсії знайдіть суму квадратів елементів цього масиву.
let arr = [1, 2, 3, 4, 5];

function getSumSqrt(arr) {
    let sum = Math.pow(arr.shift(), 2);

    if (arr.length !== 0) {
        sum += getSumSqrt(arr);
    }

    return sum;
}

console.log(getSumSqrt(arr));
