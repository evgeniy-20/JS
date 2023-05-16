//Дано деякий рядок. Знайдіть позицію першого нуля у рядку.

let str = 'Yevhen Prokopiv!';
let firstZeroIndex = str.indexOf('0');

console.log("Позиція першого нулю: ", firstZeroIndex);

//Виведіть у консоль усі числа у проміжку від 1 до 1000, сума першої та другої цифри яких дорівнює п'яти.

for (let i = 1; i <= 1000; i++) {
    let digits = i.toString().split('');
    let firstDigit = parseInt(digits[0]);
    let secondDigit = parseInt(digits[1]);
    
    if (firstDigit + secondDigit === 5) {
      console.log(i);
    }
  }

//Даний масив. Видаліть елементи із заданим значенням.

let array = [1, 2, 3, 4, 5, 6];
let valueToRemove = 3;
let filteredArray = array.filter(item => item !== valueToRemove);
console.log(filteredArray);

//Даний деякий масив, наприклад, ось такий: [1, 2, 3, 4, 5, 6] Знайдіть суму першої половини елементів цього масиву. 

let arr = [1, 2, 3, 4, 5, 6];
let halfLength = Math.ceil(arr.length / 2);
let sum = 0;

for (let i = 0; i < halfLength; i++) {
  sum += arr[i];
}

console.log("Сума першої половини елементів:", sum);

//Даний масив із числами. Підрахуйте кількість негативних чисел у цьому масиві.

let arr1 = [1,2,3,4,5,6,7,8,9, -1,-2,-3,-4,-5,-6,-7,-8,-9];

function countNegativeNumbers(array) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      count++;
    }
  }
  return count;
}
const negativeCount = countNegativeNumbers(arr1);
console.log(negativeCount);

//Даний масив із числами. Залишіть у ньому лише позитивні числа.

function filterPositiveNumbers(array) {
  const positiveNumbers = array.filter(number => number > 0);
  return positiveNumbers;
}

const numbers = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = filterPositiveNumbers(numbers);
console.log(positiveNumbers)

//Дано рядок. Видаліть передостанній символ із цього рядка.

function removeLastCharacter(str) {
  return str.slice(0, -1);
}

const text = "Hello, world!";
const modifiedText = removeLastCharacter(text);
console.log(modifiedText)

//Дано деякий рядок. Знайдіть позицію першого нуля у рядку.

function findFirstZeroPosition(str) {
  const index = str.indexOf('0');
  return index;
}

const text1 = "Yevhen 0 Prokopiv";
const zeroPosition = findFirstZeroPosition(text1);
console.log(zeroPosition);

//Дано два слова. Переконайтеся, що остання буква першого слова збігається з першою буквою другого слова.
let word1 = 'apple';
let word2 = 'easy';
if(word1[word1.length -1] == word2[0]) {
  console.log('Літери збігаються!!!')
} else {
  console.log('Літери не збігаються!!!')
}
//Дано деякий рядок. Знайдіть позицію третього нуля у рядку.

const string = '1020304050607080900';
const searchChar = '0';
const targetCount = 3;

let count = 0;
let position = -1;

for (let i = 0; i < string.length; i++) {
  if (string[i] === searchChar) {
    count++;
    if (count === targetCount) {
      position = i;
      break;
    }
  }
}

if (position !== -1) {
  console.log(`Позиція третього нуля у рядку: ${position}`);
} else {
  console.log('Третій нуль не знайдений у рядку.');
}

//Дано числа, розділені комами: '12,34,56' Знайдіть суму цих чисел.

const numbers1 = '12,34,56';
const numberArray = numbers1.split(',');
let sum1 = 0;

for (let i = 0; i < numberArray.length; i++) {
  sum1 += parseInt(numberArray[i]);
}

console.log('Сума чисел:', sum1);

//Дано деякий рядок з літерами та цифрами. Отримайте позицію першої цифри у цьому рядку.

var str1 = "abcd1234";
var firstDigitPosition = str1.search(/\d/);
console.log(firstDigitPosition);

//Даний об'єкт із ключами та значеннями. Запишіть у перший масив ключі об'єкта, а другий - значення.

var obj = { key1: "value1", key2: "value2", key3: "value3" };
var keys = Object.keys(obj);
var values = Object.values(obj);
console.log(keys);
console.log(values);

//Дано число. Виведіть у консоль кількість парних цифр у цьому числі.

var number = 123456789;
var evenDigitsCount = number.toString().split("").filter(digit => parseInt(digit) % 2 === 0).length;
console.log(evenDigitsCount);

//Дано деякий рядок: 'abcde' Переведіть у верхній регістр усі непарні літери цього рядка. У нашому випадку має вийде таке: 'AbCdE'

var string1 = "abcde";
var result = "";
for (var i = 0; i < string1.length; i++) {
if (i % 2 !== 0) {
result += string1[i].toUpperCase();
} else {
result += string1[i];
}
}
console.log(result);

//Дано деякий рядок зі словами: 'aaa bbb ccc' Зробіть великим перший символ кожного слова в цьому рядку. У нашому випадку має вийде таке: 'Aaa Bbb Ccc'

let word = "aaa bbb ccc";
let words = word.split(" ");
for (let i = 0; i < words.length; i++) {
words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
let capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);

//Дано деякий рядок, наприклад, ось такий: '023m0df0dfg0' Отримайте масив позицій всіх нулів у цьому рядку.

let str2 = "023m0df0dfg0";
let zeroPositions = [];
for (let i = 0; i < str2.length; i++) {
  if (str2[i] === "0") {
    zeroPositions.push(i);
  }
}
console.log(zeroPositions);

//Дано деякий рядок: 'abcdefg' Видаліть кожен третій символ з цього рядка. У нашому випадку має вийде таке: 'abdeg'

let str3 = "abcdefg";
let result = "";
for (let i = 0; i < str3.length; i++) {
  if ((i + 1) % 3 !== 0) {
    result += str3[i];
  }
  }
console.log(result);

//Даний деякий масив, наприклад, ось такий: [1, 2, 3, 4, 5, 6] Поділіть суму елементів, що стоять на парних позиціях, на суму елементів, які стоять на непарних позиціях.

let arr3 = [1, 2, 3, 4, 5, 6];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
  sumEven += array[i];
  } else {
  sumOdd += array[i];
  }
}
let ratio = sumEven / sumOdd;
console.log(ratio);


//