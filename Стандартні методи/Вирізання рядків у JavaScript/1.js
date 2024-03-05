// Дано рядок 'я учу javascript!'. Виріжте з неї слово 'учу'і слово 'javascript' трьома різними способами (через substr, substring, slice).
let str = 'я учу javascript!';
let word1 = str.substr(2, 3); // починаючи з позиції 2, виріжемо 3 символи
let word2 = str.substr(6, 10); // починаючи з позиції 6, виріжемо 10 символів

console.log(word1); // виведе 'учу'
console.log(word2); // виведе 'javascript'
