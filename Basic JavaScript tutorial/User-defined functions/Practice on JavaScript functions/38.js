// Зробіть функцію, яка параметром прийматиме масив і повертатиме суму його елементів.

function getArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(getArray([1, 2, 3, 4, 5, 6]));
