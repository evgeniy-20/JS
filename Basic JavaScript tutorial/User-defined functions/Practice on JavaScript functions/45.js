// Зробіть функцію, яка параметром прийматиме число і повертатиме суму його цифр

function getNum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}

console.log(getNum(27));
