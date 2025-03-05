// Зробіть функцію, яка параметром прийматиме число і перевірятиме, просте воно чи ні.
function isPrime(num) {
    if (num <= 1) return false; // Число повинно бути більше 1
    for (let i = 2; i <= Math.sqrt(num); i++) { // Перевірка до квадратного кореня числа
        if (num % i === 0) {
            return false; // Якщо є дільник, то число не просте
        }
    }
    return true; // Якщо не знайдено дільника, число просте
}

// Приклад використання:
console.log(isPrime(11)); // true
console.log(isPrime(4));
