// Зробіть об'єкт із трьома функціями, кожна з яких прийматиме параметром масив із числами. Зробіть так, щоб перша функція повертала суму елементів масиву, друга функція – суму квадратів, а третя – суму кубів.

let obj = {
    sum: function (arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    },
    sumOfSquares: function () {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += Math.pow(arr[i], 2);
        }
        return total;
    },
    sumOfCube: function () {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += Math.pow(arr[i], 3);
        }
        return total;
    }
}
let arr = [1, 2, 3, 4, 5];

console.log(obj.sum(arr));
console.log(obj.sumOfSquares(arr));
console.log(obj.sumOfCube(arr));
