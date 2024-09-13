// Дано масив з рядками. За допомогою створеної нами функції eachзробіть великим перший символ кожного рядка.

function each(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let firstUppercaseSymbol = each(['stas', 'yura', 'yevhen'], function (str) {
    return str[0].toUpperCase() + str.slice(1);
});

console.log(firstUppercaseSymbol);
