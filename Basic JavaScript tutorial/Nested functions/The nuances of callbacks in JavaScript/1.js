// За допомогою наступної функції зведіть усі елементи масиву в куб:
function each(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}
function cube(num) {
    return Math.pow(num, 3);
}

let resCub = each([1, 2, 3, 4, 5], cube);
console.log(resCub);
