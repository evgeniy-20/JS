//  Даний багатовимірний масив довільного рівня вкладеності, наприклад, такий: [1, [2, 7, 8], [3, 4], [5, [6, 7]]] Зведіть всі елементи числа цього масиву в квадрат.

function squareElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            squareElements(arr[i]);
        } else if (typeof arr[i] === 'number') {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}

const nestedArray = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
const squaredArray = squareElements(nestedArray);
console.log(squaredArray);
