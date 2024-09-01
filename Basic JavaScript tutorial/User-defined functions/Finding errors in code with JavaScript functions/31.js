// Код повинен знайти суму елементів масиву:

let getArr = getSum([1, 2, 3, 4, 5]);
console.log(getArr);

function getSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}
