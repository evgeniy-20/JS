// Напишіть код, який перевірятиме число на те, просте воно чи ні. Просте число ділиться тільки на одиницю і на себе, і не ділиться на інші числа.

function isPrime(num) {
    if (num < 2) return false; // Числа менше 2 не є простими

    for (let i = 2; i <= Math.sqrt(num); i++) { // Перевіряємо дільники до √num
        if (num % i === 0) {
            return false; // Якщо знайшли дільник, число не є простим
        }
    }

    return true; // Якщо не знайшли дільників, число просте
}

// Приклад використання:
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(20)); // false
console.log(isPrime(97)); // true
