// Дано рядок 'я учу javascript!'. Виріжте з неї слово 'учу'і слово 'javascript' трьома різними способами (через substr, substring, slice).

let str = 'I learning JavaScript';
console.log(str.substr(2, 8));
console.log(str.substring(2, 10));
console.log(str.slice(2, 10));
