// Зробіть функцію, що заповнює масив цілими числами 1 від заданого

function getArray(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(getArray(100));
