// Напишіть функцію, яка приймає рядок та повертає його підстроку, яка починається з заданого індексу та має певну довжину. Використайте метод substr.

function getSubString(str, startIndex, length) {
    return str.substr(startIndex, length);
}
let str = 'Yevhen';
let startIndex = 0;
let length = 3;
console.log(getSubString(str, startIndex, length));
