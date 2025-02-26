// Знайдіть суму непарних чисел від 1 до 99.

let sum = 0;

for (let i = 1; i <= 99; i++) {
    if (i % 2) {
        sum += i;
    }
}

console.log(sum);
