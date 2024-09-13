// За допомогою наступної функції зведіть усі елементи масиву в куб:
function each(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

function cube(num) {
    return num ** 3;
}

let res = each([1, 2, 3, 4, 5], cube);

console.log(res);
