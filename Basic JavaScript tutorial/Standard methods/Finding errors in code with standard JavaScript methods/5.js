// Код повинен знайти добуток цифр числа:

let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
    prod *= digit;
}

console.log(prod);
