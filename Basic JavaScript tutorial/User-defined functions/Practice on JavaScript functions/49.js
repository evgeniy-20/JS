// Зробіть функцію, яка параметром прийматиме число і перевірятиме, просте воно чи ні.

function isPrime(n) {
    if (n <= 1) {
        return false;
    } if (n === 2) {
        return true;
    } if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(6));
