// Зробіть функцію, яка параметром прийматиме число і повертатиме масив його дільників.

function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getDivisors(42));
