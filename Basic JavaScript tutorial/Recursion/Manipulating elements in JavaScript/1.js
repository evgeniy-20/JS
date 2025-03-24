// Дано багатовимірний масив довільного рівня вкладеності, наприклад, такий: Підведіть усі елементи-числа цього масиву до квадрата.

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function square(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(square(arr[i]));
        } else {
            result.push(Math.pow(arr[i], 2));
        }
    }
    return result;
}

console.log(square(arr));
