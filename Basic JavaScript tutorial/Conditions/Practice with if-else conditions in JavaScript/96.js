// Дано число з 6 цифр. Перевірте, чи сума перших трьох цифр дорівнює сумі других трьох цифр. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.

let num = 123123;
let numStr = String(num);
let sum1 = Number(numStr[0]) + Number(numStr[1]) + Number(numStr[2]);
let sum2 = Number(numStr[3]) + Number(numStr[4]) + Number(numStr[5]);
if (sum1 === sum2) {
    console.log('yes');
} else {
    console.log('no');
}
