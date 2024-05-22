// Оголошуємо змінні

let nick;

console.log(nick);

let age = 26;
console.log(age);
age = 30;
console.log(age);

let numberOfSiblings = 1 + 3;
let numberOfCandies = 8;
let result = numberOfCandies / numberOfSiblings;

console.log(result);

// секунд в годині

let secondsInMinute = 60;
let minuteInAnHour = 60;
let secondsInAnHour = secondsInMinute * minuteInAnHour;
console.log(secondsInAnHour);

// секунд у дні

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;

console.log(secondsInADay);

// Секунд у році

let daysInAYear = 365;
let secondsInYear = secondsInADay * daysInAYear;

console.log(secondsInYear);

// Вік в секундах

let age1 = 26;

let result1 = age1 * secondsInYear;

console.log(result1);
