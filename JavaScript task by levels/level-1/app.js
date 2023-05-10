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

//Даний масив із числами. Знайдіть суму квадратів елементів цього масиву.

let nums = [2, 4, 6, 8, 10];

let sumSquares = 0;
for (let i = 0; i < nums.length; i++) {
  sumSquares += Math.pow(nums[i], 2);
}
console.log(sumSquares);
//Даний масив із числами. Знайдіть суму квадратного коріння елементів цього масиву.

let sumSqrt = 0;
for (let i = 0; i < nums.length; i++) {
  sumSqrt += Math.sqrt(nums[i]);
}
console.log(sumSqrt); 

//Даний масив із числами. Знайдіть суму позитивних елементів цього масиву.

let sumPositives = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    sumPositives += nums[i];
  }
}
console.log(sumPositives);

//Даний масив із числами. Знайдіть суму тих елементів цього масиву, які більші за нуль і менше десяти. 

let sumBetween0And10 = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0 && nums[i] < 10) {
    sumBetween0And10 += nums[i];
  }
}
console.log(sumBetween0And10);

//Дано рядок: 'abcde' Отримайте масив літер цього рядка.

let str3 = 'abcde';

let arr = str3.split('');
console.log(arr);

//Дано деяке число: 12345 Отримайте масив цифр цього числа.

let num6 = 12345;

let arr1 = num6.toString().split('').map(Number);

console.log(arr1);

//Дано деяке число: 12345 Переверніть його: 54321

let num7 = 12345;

let reversedNum = Number(num7.toString().split('').reverse().join(''));
console.log(reversedNum);

//Дано деяке число: 12345 Знайдіть суму цифр цього числа.

let num8 = 12345;

let digits = num8.toString().split('');
let sum4 = 0;
for (let i = 0; i < digits.length; i++) {
  sum4 += Number(digits[i]);
}
console.log(sum4);

//Заповніть масив цілими числами від 1до 10.

let arr2 = [];

for(let i = 1; i <= 10; i++) {
  arr2.push(i);
}
console.log(arr2)

//Заповніть масив парними числами з проміжку 1до 100.

let arr3 = [];

for(let i = 1; i <= 100; i++) {
  arr3.push(i);
}
console.log(arr3)

//Даний масив із дробами: [1.456, 2.125, 3.32, 4.1, 5.34] Округліть ці дроби до одного знака в дрібній частині.

let arr4 = [1.456, 2.125, 3.32, 4.1, 5.34];
let roundedArr = [];
for (let i = 0; i < arr4.length; i++) {
  roundedArr.push(Number(arr4[i].toFixed(1)));
}
console.log(roundedArr);

//Дано масив з рядками. Залишіть у цьому масиві тільки ті рядки, які починаються на http://.

const strings = ['http://google.com', 'https://facebook.com', 'http://wikipedia.org', 'ftp://example.com'];

const httpStrings = strings.filter(str => str.startsWith('http://'));

console.log(httpStrings);

//Дано масив з рядками. Залишіть у цьому масиві лише ті рядки, які закінчуються на .html.

const strings1 = ['index.html', 'main.css', 'script.js', 'about.html'];

const htmlStrings = strings1.filter(str => str.endsWith('.html'));

console.log(htmlStrings);

//Даний масив із числами. Збільшіть кожну кількість з масиву на 10 відсотків. 

const numbers = [1, 2, 3, 4, 5];

const Numbers = numbers.map(num => num * 1.1);

console.log(Numbers);

//Заповніть масив випадковими числами із проміжку від 1 до 100.

let arr5 = [];

for(let i = 1; i <= 10; i++) {
  arr5.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr5);

//Дано деяке число: 12345 Виведіть у консоль усі його символи з кінця.

let num9 = "12345";
let numArray = num9.split("");
let reversedNumArray = numArray.reverse();
let reversedNum1 = reversedNumArray.join("");
console.log(reversedNum1);

//Даний деякий масив, наприклад, ось такий: [1, 2, 3, 4, 5, 6] По черзі виведіть у консоль підмасиви із двох елементів нашого масиву: [1, 2] [3, 4] [5, 6]

let arr6 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr6.length; i += 2) {
  let subArr = arr6.slice(i, i + 2);
  console.log(subArr);
}

//Дано два масиви: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Злийте ці масиви в новий масив: [1, 2, 3, 4, 5, 6]

let arr7 = [1, 2, 3];
let arr8 = [4, 5, 6];
let newArr = arr7.concat(arr8);
console.log(newArr);
