// Дано змінну, що містить деякий рядок. Перевірте, чи цей рядок закінчується на символ 'x'.

let str = 'abcdx';
let last = str[str.length - 1]
if (last === 'x') {
    console.log('Yes');
} else {
    console.log('No');
}
