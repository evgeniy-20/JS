// Зробіть функцію, яка параметром прийматиме масив із числами, і перевірятиме, що всі елементи в цьому масиві є парними числами.

function getArr(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(getArr([2, 4, 6, 8, 10, 11]));
