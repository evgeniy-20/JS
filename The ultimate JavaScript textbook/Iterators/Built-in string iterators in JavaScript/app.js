// Дано рядок із цифрами: Переберіть циклом цифри цього числа і знайдіть їхню суму.

let str = '12345';
let sum = 0;
for (let elem of [...str]) {
    sum += Number(elem);
}

console.log(sum);
