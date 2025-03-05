// Зробіть функцію, яка параметром прийматиме число і повертатиме суму його цифр.

function getSum(num) {
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}

console.log(getSum(456789));
