// Не підглядаючи в мій код, реалізуйте таку саму функцію test самостійно.

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result = test([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});

console.log(result);
