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

