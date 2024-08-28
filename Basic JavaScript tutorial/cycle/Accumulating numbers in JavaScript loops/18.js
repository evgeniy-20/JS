// Знайдіть суму парних чисел від 2до 100.
let sum = 0;

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);
