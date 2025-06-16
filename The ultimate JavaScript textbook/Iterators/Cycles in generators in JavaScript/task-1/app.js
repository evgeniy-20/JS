// Створіть ітератор, кожен виклик якого повертатиме числа від 10 до нуля.

function* func() {
    for (let i = 10; i >= 0; i--) {
        yield i;
    }
}

let iter = func();

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
