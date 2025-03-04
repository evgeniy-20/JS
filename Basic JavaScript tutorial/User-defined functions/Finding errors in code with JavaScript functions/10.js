// Код повинен перевірити число на те, що воно є простим:

function isPrime(num) {
    if (num < 2) return false; // Числа менші за 2 не є простими

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Якщо знайшли хоча б один дільник, число не просте
        }
    }

    return true; // Якщо жодного дільника не знайшли, число просте
}

console.log(isPrime(13)); // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false
console.log(isPrime(17)); // true
console.log(isPrime(0));  // false
console.log(isPrime(-5)); // false
