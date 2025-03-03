// Зробіть функцію, яка виводить у консоль суму чисел від 1 до 100.

function getSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

getSum();
