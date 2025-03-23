// Самостійно, не підглядаючи в мій код, реалізуйте лічильник виклику функції, що працює на замикання.

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
