//У змінній month лежить якесь число з інтервалу від 1до 12. Визначте, в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).
let month = 14;
if(month >= 0 && month <= 3) {
    console.log('зима');
} else if (month >= 4 && month <= 6) {
    console.log('весна');
} else if(month >= 7 && month <= 9) {
    console.log('літо');
} else if (month >= 10 && month <= 12) {
    console.log('осінь');
} else {
    console.log('помилка!!!');
}
//Дано рядок, що складається із символів, наприклад, 'abcde'. Перевірте, що першим символом цього рядка є буква 'a'. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.
let str = 'abcde';
if(str[0] === 'a') {
    console.log('Yes');
} else {
    console.log('No');
}
//Дано число, наприклад, 12345. Перевірте, що першим символом цього числа є цифра 1, 2або 3. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.
let number = 12345;
let newStr = String(number);
if(newStr[0] == 1 || newStr[0] == 2 || newStr[0] == 3) {
    console.log('Yes');
} else {
    console.log('No');
}
//Дано тризначне число. Знайдіть суму цифр цього числа.
let str1 = '654';
let result = Number(str1[0]) + Number(str1[1]) + Number(str1[2]);
console.log(result);
//Дано число з 6цифр. Перевірте, чи сума перших трьох цифр дорівнює сумі других трьох цифр. Якщо це так - виведіть 'да', в іншому випадку виведіть 'нет'.
let str2 = '123456';
let sum1 = Number(str2[0]) + Number(str2[1]) + Number(str2[2]);
let sum2 = Number(str2[3]) + Number(str2[4]) + Number(str2[5]);
if(sum1 === sum2) {
    console.log('yes');
} else {
    console.log('no');
}
