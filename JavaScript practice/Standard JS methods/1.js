// Строки: Напиши функцію, яка перевіряє, чи є слово "JavaScript" у введеній користувачем строкі.

function containsJavaScript(inputString) {
    return inputString.includes('JavaScript');
}

// Приклад використання:
let userInput = 'I like JavaScript';
console.log(containsJavaScript(userInput));
