// Зробіть функцію, що заповнює масив цілими числами від 1 заданого.

function getNum(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(getNum(45));
