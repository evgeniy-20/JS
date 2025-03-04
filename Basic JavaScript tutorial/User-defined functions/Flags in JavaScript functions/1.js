// Зробіть функцію, яка параметром прийматиме масив із числами, і перевірятиме, що всі елементи в цьому масиві є парними числами.

function gerArr(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(gerArr([10, 2, 8, 4, 6]));
