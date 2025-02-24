// Дано число з 6 цифр. Перевірте, чи сума перших трьох цифр дорівнює сумі других трьох цифр. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'

let num = 123033;
let sum1 = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
let sum2 = Number(String(num)[3]) + Number(String(num)[4]) + Number(String(num)[5]);

if (sum1 == sum2) {
    console.log('суммы равны');
} else {
    console.log('суммы не равны');
}
