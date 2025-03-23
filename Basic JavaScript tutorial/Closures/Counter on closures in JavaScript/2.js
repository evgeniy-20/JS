// Нехай функція в замиканні зберігає число 10. Зробіть так, щоб кожен виклик функції зменшував це число на 1 і виводив у консоль зменшене число.

function createCounter() {
    let count = 10;
    return function () {
        count--;
        return count;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
