// Дано число з 6-ти цифр. Перевірте, що сума перших трьох цифр дорівнює сумі других трьох цифр. Якщо це так - виведіть 'так', в іншому випадку виведіть 'ні'.

let num = '123033';

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
    console.log('суми рівні');
} else {
    console.log('суми не рівні');
}
