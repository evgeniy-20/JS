// Модифікуйте попереднє завдання так, щоб відлік доходив до 0, а потім кожен наступний виклик функції виводив повідомлення про те, що відлік закінчено.


function counter() {
    let count = 10;

    return function () {
        if (count > 0) {
            count--;
        } else {
            console.log('Відлік закінчено')
        }
        return count;
    }
}

let decrement = counter();

console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
console.log(decrement());
