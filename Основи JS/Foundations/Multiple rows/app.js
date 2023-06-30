// //Запишіть у змінну str рядок, що складається із символів 'a', 'b', 'c', причому після кожного символу, крім останнього, має стояти перенесення рядка.

// let a = '5' * 1 + '2' * 1;

// console.log(a);

// //Дана змінна a зі значенням '10' та змінна bзі значенням '20'. Складіть дані змінні як числа.

// let b = '10';
// let c = '20';
// let result = Number(b) + Number(c);
// console.log(result);

// //Дана змінна зі значенням '5px'та змінна зі значенням '6px'. Знайдіть суму пікселів із значень цих змінних та виведіть її на екран.

// let str1 = '5px';
// let str2 =  '6px';
// let result1 = parseInt(str1) + parseInt(str2);
// console.log(result1);

// //Дана змінна зі значенням '5.5px' та змінна зі значенням '6.25px'. Знайдіть суму пікселів із значень цих змінних та виведіть її на екран.

// let str3 = '5.5px';
// let str4 =  '6.25px';
// let result2 = parseFloat(str3) + parseFloat(str4);
// console.log(result2);

// //Модифікуйте попереднє завдання так, щоб до результату, що виводиться, додавалися літери 'px'. Тобто, якщо наша сума дорівнює 11.75, то на екран нехай виведеться '11.75px'.

// let str5 = '5.5';
// let str6 =  '6.25';
// let result3 = +str5 + +str6;
// console.log(result3 + 'px');

// //Дано змінну з числом. Знайдіть кількість цифр у цьому числі.

// let num = 123456789;
// let str = String(num);
// console.log(str.length);

// //Дано дві змінні з числами. Знайдіть кількість цифр в одному і другому числі, результати складіть і виведіть на екран.

// let num1 = 123456789;
// let num2 = 12345;

// let 

// const result16 = parseInt('12px');
// console.log(result16 + 'px');



// let num4 = 16;
// let str7 = String(num4);
// console.log(str7.length);

//Дано рядок 'abcde'. Звертаючись до окремих символів цього рядка, виведіть на екран символ 'a', символ 'c', символ 'e'.

let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

//Дана змінна з рядком 'abcde'. Звертаючись до окремих символів цього рядка, запишіть у нову змінну символи цього рядка у зворотному порядку, тобто 'edcba'.

let str1 = 'abcde';
let newStr1 = str1[4] + str1[3] + str1[2] + str1[1] + str1[0];
console.log(newStr1);

//Дана змінна str з рядком 'abcde' та змінна num з номером символу. На екрані виведіть символ, номер якого зберігається в змінній num.

let str2 = 'abcde';
let num = 2;
console.log(str2[num]);

//Дано рядок. Виведіть на екран останній символ.

let str3 = 'Yevhen Prokopiv';
console.log(str3[str3.length - 1])

//Дано рядок. Виведіть на екран передостанній символ.

let str4 = 'Yevhen Prokopiv';

console.log(str4[str4.length - 2])

//Дано рядок. Виведіть на екран її передостанній символ.

let str5 = 'Yevhen Prokopiv';


console.log(str5[str5.length - 2])

//Дано рядок '12345'. Знайдіть суму цифр цього рядка.

let str6 = '12345';

let result = Number(str6[0]) + Number(str6[1]) + Number(str6[2]) + Number(str6[3]) + Number(str6[4]);

console.log(result);

//

let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
console.log(num1);

let str7 = 'Женя Дурачок';
console.log(str7[str7.length - 1]);

let test = String(7849);

let number =  test[0] + test[test.length - 1];

number = 'Hello ' + number;

console.log(number);

let num5 = 5;
num5 *= 5;
console.log(num5);

let a = 0.1 + 0.2;
console.log(a.toFixed(1));