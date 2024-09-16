// Нехай функція замикання зберігає число 10. Зробіть так, щоб кожен виклик функції зменшував це число 1і виводив в консоль зменшене число.

function counter() {
    let count = 10;

    return function () {
        count--;
        return count;
    }
}

let decrement = counter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
