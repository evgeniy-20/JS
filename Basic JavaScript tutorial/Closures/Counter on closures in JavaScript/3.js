// Модифікуйте попередню задачу так, щоб відлік доходив до 0, а потім кожен наступний виклик функції виводив у консоль повідомлення про те, що відлік закінчено.

function createCounter() {
    let count = 10;
    return function () {
        if (count <= 0) {
            return 'The countdown is over!';
        }
        count--;
        return count;
    };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
