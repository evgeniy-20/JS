// Напишіть код, який перевірятиме число на те, просте воно чи ні. Просте число ділиться тільки на одиницю і на саме себе, і не ділиться на інші числа.
function isPrime(number) {
    if (number <= 1) {
        return false; // числа менше або рівного 1 не є простими
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // число ділиться на інше число, тому воно не є простим
        }
    }
    return true; // число не ділиться на інше число, тому воно просте
}

// Приклади перевірки
console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
console.log(isPrime(29)); // true
console.log(isPrime(1)); // false
