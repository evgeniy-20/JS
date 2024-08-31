// Дано рядок 'я учу javascript!'. Виріжте з неї слово 'учу'і слово 'javascript' трьома різними способами (через substr, substring, slice).

let str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substr(6, 10));
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
console.log(str.slice(2, 5));
console.log(str.slice(6, 16));
