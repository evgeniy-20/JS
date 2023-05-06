//Дано число. Перевірте, чи негативне воно чи ні. Виведіть інформацію в консоль.

let number = 5;

if(number > 0) {
    console.log('true');
} else {
    console.log('false');
}

//Дано рядок. Виведіть у консоль довжину цього рядка.

let string = 'Yevhen Prokopiv';

console.log(string.length);

//Дано рядок. Виведіть у консоль останній символ рядка.

let name = 'Yevhen!';

let lastSymbol = name[name.length - 1];

console.log(lastSymbol);

//Дано число. Перевірте, парне воно чи ні.

let number1 = 6;

if(number1 % 2 === 0) {
    console.log('Парне!');
} else {
    console.log('Непарне!');
}

//Дано два слова. Перевірте, що перші літери цих слів збігаються.

let word1 = "apple";
let word2 = "orange";
if (word1[0] === word2[0]) {
  console.log("True");
} else {
  console.log("False");
}

//Дане слово. Отримайте останню літеру. Якщо слово закінчується на м'який знак, отримайте передостанню букву.

let word = "hello";
let lastLetter;
if (word[word.length - 1] === "ь") { 
  lastLetter = word[word.length - 2];
} else {
  lastLetter = word[word.length - 1]; 
}
console.log(lastLetter);