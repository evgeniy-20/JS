// Дано масив із рядками. За допомогою створеної нами функції each зробіть заголовним перший символ кожного рядка.

function each(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

let res = each(['stas', 'yura', 'yevhen'], function (str) {
    return str[0].toUpperCase() + str.slice(1);
});

console.log(res);
