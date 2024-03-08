// Зробіть функцію, що заповнює масив цілими числами від 1 до заданого.
function getArrayNumbers(numbers) {
    let arr = [];
    for (let i = 1; i <= numbers; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(getArrayNumbers(65));
