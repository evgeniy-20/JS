// Зробіть функцію, яка параметром прийматиме число і перевірятиме, що всі цифри цього числа є непарними

function getNum(num) {
    let str = String(num)
    for (let i = 0; i < str.length; i++) {
        let dight = Number(str[i]);
        if (dight % 2 === 0) {
            return false;
        }
    }

    return true;
}

console.log(getNum(13));
console.log(getNum(24));
