// Переробіть передану функцію на Function Expression з тим самим ім'ям func.

let func = function (num) {
    return Math.pow(num, 3);
}

function test(callback) {
    console.log(callback(9));
}

test(func);
