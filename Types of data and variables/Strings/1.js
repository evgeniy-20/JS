// рядки

let myAwesomeString = 'Something REALLY awesome!!!';
let myThing = 5;
myThing = 'this is a string';

// З'єднуємо рядки

let greeting = 'Hello ';
let myName = 'Yevhen!';
console.log(greeting + myName);

//  Визначаємо довжину рядка

console.log('Supercaifragilisticexpialidocious'.length);

let java = 'java';
console.log(java.length);

let script = 'script';
console.log(script.length);

let javaScript = java + script;
console.log(javaScript.length);

// Видобовуємо окремий символ із рядка

console.log(myName[0]);

let codeWord1 = 'are';
let codeWord2 = 'tudas';
let codeWord3 = 'unsafe';
let codeWord4 = '?!';

let result = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];

console.log(result);

//  Змінюємо кегель у рядку

let stillyString = 'hELlo THERE, hOW ARE yOu doIng?';
console.log(stillyString[0].toUpperCase() + stillyString.slice(1).toLowerCase());
