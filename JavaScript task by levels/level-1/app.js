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

//Дано число. Виведіть у консоль першу цифру цього числа.

let num1 = 564;

if(num1 >= 10) {
  num1 = Math.floor(num1 / 10);
}

console.log(num1);

//Дано число. Виведіть у консоль останню цифру цього числа.

const num2 = 54678
const lastDigit = num2 % 10;
console.log(lastDigit)

//Дано число. Виведіть у консоль суму першої та останньої цифри цього числа.

const num = 76543;
const lastDigit1 = num % 10;
const firstDigit = Math.floor(num / Math.pow(10, (num.toString().length - 1)));
const sum = lastDigit1 + firstDigit;
console.log(sum);

//Дано число. Виведіть кількість цифр у цьому числі.

const num3 = 1234567890;
const newNum= num3.toString().length;
console.log(newNum);

//Дано два числа. Перевірте, чи перші цифри цих чисел збігаються.

const num4 = 12345;
const num5 = 16789;

if (num4.toString()[0] === num5.toString()[0]) {
  console.log("True");
} else {
  console.log("False");
}