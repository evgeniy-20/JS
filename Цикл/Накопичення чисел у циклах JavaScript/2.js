// Знайдіть суму непарних чисел від 1 до 99.

let sum = 0;

for (let i = 1; i < 100; i += 2) {
    sum += i;
}

console.log(sum);
