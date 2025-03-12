// Зробіть об'єкт із трьома функціями, кожна з яких прийматиме параметром масив із числами. Зробіть так, щоб перша функція повертала суму елементів масиву, друга функція – суму квадратів, а третя – суму кубів.

let obj = {
    sum: function (arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    },
    sumOfSquers: function (arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += Math.pow(arr[i], 2)
        }
        return result;
    },
    sumOfCubes: function (arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += Math.pow(arr[i], 3)
        }
        return result;
    }
}

console.log(obj.sum([1, 2, 3, 4, 5, 6]));
console.log(obj.sumOfSquers([1, 2, 3, 4, 5, 6]));
console.log(obj.sumOfCubes([1, 2, 3, 4, 5, 6]));
