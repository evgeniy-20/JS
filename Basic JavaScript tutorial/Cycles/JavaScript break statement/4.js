// Визначте, скільки цілих чисел, починаючи з числа 1, потрібно скласти, щоб сума вийшла більше 100.

let sum = 0;
let count = 0;
for (let i = 0; ; i++) {
    sum += i;
    count++
    if (sum > 100)
        break;
}

console.log(count);
