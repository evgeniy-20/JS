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

//Дано рядок. Якщо в цьому рядку більше одного символу, виведіть передостанній символ цього рядка в консоль.

let str = "example";
if (str.length > 1) {
  console.log(str.charAt(str.length - 2));
}

//Дано два цілих числа. Перевірте, що перше число без залишку поділяється на друге.

let a = 10;
let b = 2;

if (a % b === 0) {
  console.log('без залишуку ');
} else {
  console.log('з залишком');
}

//Виведіть у консоль усі цілі числа від 1до 100.

for(let i = 1; i <= 100; i++) {
  console.log(i);
}

//Виведіть у консоль усі цілі числа від -100до 0.

for(let i = -100; i <= 0; i++) {
  console.log(i);
}

//Виведіть у консоль усі цілі числа від 100до 1.

for(let i = 100; i <= 1; i++) {
  console.log(i);
}

//Виведіть у консоль усі парні числа із проміжку від 1до 100.

for(let i = 1; i <= 100; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

//Виведіть у консоль усі числа кратні трьом у проміжку від 1до 100.

for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}

//Знайдіть суму всіх цілих чисел від 1до 100.

let sum1 = 0;

for(let i = 1; i <= 100; i++) {
    sum1 += i;
}
console.log(sum1);

//Знайдіть суму всіх цілих парних чисел у проміжку від 1до 100.

let sum2 = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
      sum2 += i;
    }
}
console.log(sum2);

//Знайдіть суму всіх непарних чисел у проміжку від 1до 100.

let sum3 = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
      sum3 += i;
    }
}
console.log(sum3);

//Дано два цілих числа. Знайдіть залишок від розподілу першого числа на друге.

const c = 17;
const f = 5;

const remainder = c % f;

console.log(remainder);

//Дано деякий рядок. Переберіть та виведіть у консоль по черзі всі символи з кінця рядка.

const str1 = "Hello, world!";

for (let i = str1.length - 1; i >= 0; i--) {
  console.log(str1[i]);
}










const str2 = "Hello, world!";

for (let i = str2.length - 1; i >= 0; i--) {
  console.log(str2[i]);
}

