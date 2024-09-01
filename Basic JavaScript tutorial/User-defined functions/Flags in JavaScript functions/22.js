// Зробіть функцію, яка параметром прийматиме масив і перевірятиме, чи є в цьому масиві два однакові елементи поспіль.

function getArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }

    return false;
}

console.log(getArray([1, 2, 2, 3, 4, 5]));
console.log(getArray([1, 2, 3, 4, 5]));
