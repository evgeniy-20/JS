// Зробіть функцію, яка параметром прийматиме число і перевірятиме, що всі цифри цього числа є непарними.

function areAllDigitsOdd(num) {
    const numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString[i]);
        if (digit % 2 === 0) {
            return false;
        }
    }

    return true;
}

// Приклад використання:
console.log(areAllDigitsOdd(13579));
console.log(areAllDigitsOdd(13572));
