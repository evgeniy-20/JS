// Дано масив із рядками. За допомогою створеної нами функції each переверніть символи кожного рядка у зворотному порядку.

function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let res = each(['Stas', 'Youra', 'Yevhen'], function (str) {
    return str.split('').reverse().join('');
});

console.log(res);
