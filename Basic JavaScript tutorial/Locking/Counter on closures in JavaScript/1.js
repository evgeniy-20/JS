// Самостійно, не підглядаючи в мій код, реалізуйте лічильник виклику функції, що працює на замикання.

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

let increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
