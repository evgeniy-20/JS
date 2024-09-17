// Даний багатовимірний масив довільного рівня вкладеності, наприклад, такий
//[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
//Зведіть всі елементи числа цього масиву в квадрат.

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = Math.pow(arr[i], 2);
        }
    }

    return arr;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));
