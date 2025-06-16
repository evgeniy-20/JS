// Дано число. Знайдіть суму його цифр.

let str = 12345;
let num = [...String(str)].map(Number);

let sum = 0;
for (let elem of num) {
    sum += elem;
}

console.log(sum);
