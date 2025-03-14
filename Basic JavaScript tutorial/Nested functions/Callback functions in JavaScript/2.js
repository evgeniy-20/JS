// Дано масив із рядками. За допомогою створеної нами функції each переверніть символи кожного рядка у зворотному порядку.

function each(arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

let res = each(['Stas', 'Yura', 'Yevhen'], function (str) {
    return str.split('').reverse().join('');
});

console.log(res);
