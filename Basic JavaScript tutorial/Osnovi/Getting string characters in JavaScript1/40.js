// Дана змінна з рядком 'abcde'. Звертаючись до окремих символів цього рядка, запишіть у нову змінну символи цього рядка у зворотному порядку, тобто 'edcba'.

let str = 'abcde';
let newStr = str[4] + str[3] + str[2] + str[1] + str[0];

console.log(newStr);