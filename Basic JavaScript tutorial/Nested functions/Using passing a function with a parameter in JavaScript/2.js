// Викличте створену вами функцію test, передавши їй параметром масив із числами. Зробіть так, щоб функція повернула масив із кубами цих чисел.

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

let result = test([1, 2, 3], function (num) {
    return Math.pow(num, 3);
});

console.log(result);
