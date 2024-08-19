// Дано ціле число. Напишіть умову, яка перевірить, чи остання цифра цього числа дорівнює нулю.

let num = 11;
let str = String(num);
let last = str[str.length - 1];
if (last == 0) {
    console.log('yes');
} else {
    console.log('no');
}
