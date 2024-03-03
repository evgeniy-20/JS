// Код має перевірити, чи дорівнює сума перших трьох цифр числа сумі других трьох чисел:

let num = '123033';

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
    console.log('суми рівні');
} else {
    console.log('суми не рівні');
}
