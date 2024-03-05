let str = 'я учу javascript!';
let word1 = str.slice(2, 5); // виріжемо символи від 2-го до 4-го (не включно)
let word2 = str.slice(6, -1); // виріжемо символи від 6-го до останнього (не включно)

console.log(word1); // виведе 'учу'
console.log(word2); // виведе 'javascript'
