// Дано ціле число. Напишіть умову, яка перевірить, чи дорівнює остання цифра цього числа нулю

let num = 123450;
let str = String(num);
let last = str[str.length - 1];

if (last === '0') {
    console.log("+++");
}
