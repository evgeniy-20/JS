// Дано масив із числами. За допомогою створеної нами функції each збільште кожен елемент удвічі.

function each(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

let res = each([1, 2, 3, 4, 5], function (num) {
    return num * 2;
})
console.log(res);
