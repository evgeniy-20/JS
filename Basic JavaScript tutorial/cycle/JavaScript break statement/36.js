let sum = 0;
let count = 0;

for (let i = 1; sum <= 100; i++) {
    sum += i;
    count++;
}

console.log("Потрібно скласти", count, "чисел, щоб сума перевищила 100.");
