// Даний масив: За допомогою рекурсії знайдіть суму квадратів елементів цього масиву.

function getSumSqrt(arr, index = 0) {
    if (index === arr.length) return 0; // Базовий випадок
    return Math.pow(arr[index], 2) + getSumSqrt(arr, index + 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(getSumSqrt(arr));
