// Дано рядок: Розбийте рядок на окремі слова.Перетворіть його на рядок, де слова розділяються символом |.

let sentence = "JavaScript is fun";
let newStr = sentence.split(' ').join('|');
console.log(newStr);
