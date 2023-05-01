//Перетворіть останню літеру рядка у верхній регістр.

let str = 'yevhen';

let result = `yevhe${str[str.length -1].toUpperCase()}`
console.log(result);

//Перетворіть перші 2літери рядка у верхній регістр.
let str1 = 'yevhen';
let result1 = `${str[0].toUpperCase()}${str[1].toUpperCase()}vhen`;
console.log(result1);

//Нехай дано рядок, у якого перша літера у верхньому регістрі, наприклад ось така:  let str = 'London';
//Перетворіть першу літеру рядка на нижній регістр.
let str2 = 'London';
let result2 = `${str2[0].toLowerCase()}ondon`;
console.log(result2); 
//Самостійно, не підглядаючи в мій код, повторіть моє рішення.

let str3 = 'word1 word2 word3';
let words = str3.split(' ');
for(let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
let result3 = words.join(' ');
console.log(result3);
//Перетворіть рядок 'var_test_text' на 'VarTestText'. Написаний код повинен працювати для будь-яких рядків такого типу (тобто для рядків, у яких слова розділені символи підкреслення).

let string = 'var_test_text';
let newString = string.split('_');
for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].slice(0,1).toUpperCase() + newString[i].slice(1);
}
let res = newString.join('');
console.log(res);

//Модифікуйте попереднє завдання так, щоб перша літера нового рядка була в нижньому регістрі.