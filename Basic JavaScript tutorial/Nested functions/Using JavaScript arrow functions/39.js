// Дана наступна функція з коллбеком: Спростіть коллбек через стрілочну функцію.

function filter(arr, callback) {
    let result = [];

    for (elem of arr) {
        result.push(callback(elem));
    }

    return result;
}
let res = filter([1, 2, 3, 4, 5], elem => elem > 0);

console.log(res);
