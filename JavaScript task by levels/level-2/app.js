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