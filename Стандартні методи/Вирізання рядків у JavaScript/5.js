// Створіть функцію, яка приймає рядок та повертає його підстроку, що складається з символів між двома заданими індексами (включно). Використайте метод substring.

function getSubString(str, startIndex, endIndex) {
    return str.substring(startIndex, endIndex + 1);
}
let str = 'Yevhen';
let startIndex = 0;
let endIndex = 3;
console.log(getSubString(str, startIndex, endIndex));
