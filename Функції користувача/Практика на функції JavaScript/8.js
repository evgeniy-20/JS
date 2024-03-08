// Зробіть функцію, яка параметром прийматиме число і повертатиме суму його цифр.

function getDigit(number) {
    let str = String(number);
    let sum = 0;
    for (let digit of str) {
        sum += Number(digit);
    }
    return sum;
}

console.log(getDigit(54));
