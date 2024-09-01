// Код повинен перевірити число на те, що воно є простим:

function isPrime(num) {
    if (num <= 1) return false; // 0, 1 і негативні числа не є простими
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Якщо ділиться на i без остачі, не є простим
        }
    }
    return true; // Якщо не знайшли жодного дільника, число є простим
}

console.log(isPrime(13)); // повинен вивести true
