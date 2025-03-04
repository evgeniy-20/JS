// Зробіть функцію, яка параметром прийматиме число і перевірятиме, що всі цифри цього числа є непарними.

function gerArr(num) {
    let strNum = String(num)
    for (let digit of strNum) {
        if (Number(digit) % 2 === 0) {
            return false;
        }
    }

    return true;
}

console.log(gerArr(14));
