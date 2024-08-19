// Нехай у змінній num зберігається число. Визначте, парне чи ні. Число буде парним, якщо останній символ дорівнює 0, 2, 4, 6або 8, і непарним інакше.

let num = 18;
let str = String(num);
let last = str[str.length - 1];
if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
    console.log('yes');
} else {
    console.log('no');
}
