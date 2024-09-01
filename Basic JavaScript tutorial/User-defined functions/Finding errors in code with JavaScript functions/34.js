// Код повинен знайти суму елементів масиву:

let arr = [1, 2, 3, 4, 5];
let sum = getSum(arr);
console.log(sum);

function getSum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}
