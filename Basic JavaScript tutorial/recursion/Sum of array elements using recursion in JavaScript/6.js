function flattenArrayToString(arr) {
    let result = '';

    // Проходимо через кожен елемент масиву
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Якщо елемент - це масив, рекурсивно викликаємо функцію для цього масиву
            result += flattenArrayToString(arr[i]);
        } else if (typeof arr[i] === 'string') {
            // Якщо елемент - це рядок, додаємо його до результату
            result += arr[i];
        }
    }

    return result;
}

// Приклад масиву
const data = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// Виклик функції
const result = flattenArrayToString(data);
console.log(result);  // Виведе 'abcdefgjk'
