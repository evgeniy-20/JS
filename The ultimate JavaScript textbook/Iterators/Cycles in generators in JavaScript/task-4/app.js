// Зробіть ітератор, кожен виклик якого повертатиме наступний ступінь двійки.

function* func(maxPower) {
    let power = 0;
    while (power <= maxPower) {
        yield 2 ** power;  // 2 в степені power
        power++;
    }
}

let iter = func(5);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
