// Зробіть генератор, який параметром прийматиме число. Нехай кожен виклик ітератора зменшує число на одиницю, поки не буде досягнуто нуля.

function* func(num) {
    for (let i = num; i >= 0; i--) {
        yield i;
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
