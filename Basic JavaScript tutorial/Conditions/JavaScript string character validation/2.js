// Дано змінну, що містить деякий рядок. Перевірте, чи цей рядок закінчується на символ 'x'.
let str = 'abcx';
let last = str[str.length - 1];
if (last === 'x') {
    console.log('yes');
}
