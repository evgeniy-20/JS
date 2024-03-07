// Зробіть функцію, яка параметром прийматиме рядок і перевертатиме його символи у зворотному порядку.

function getStr(str) {
    return str.split('').reverse().join('');
}

console.log(getStr('Yevhen'));
