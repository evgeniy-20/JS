//Код має знайти суму цифр числа:

let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);
