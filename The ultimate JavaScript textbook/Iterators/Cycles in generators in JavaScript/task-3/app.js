// Зробіть генератор, який параметром прийматиме число. Нехай кожен виклик ітератора зменшує число вдвічі і повертає результат. І так, поки число не стане меншим за одиницю.

function* func(num) {
    while (num >= 1) {
        yield num;
        num /= 2;
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
