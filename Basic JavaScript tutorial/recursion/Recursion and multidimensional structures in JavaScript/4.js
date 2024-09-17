// Даний багатовимірний масив довільного рівня вкладеності, наприклад, такий: Напишіть код, який розгорне наш багатовимірний масив у одновимірний. Для наведеного вище масиву це буде виглядати так:

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i])); // Рекурсія для вкладених масивів
        } else {
            result.push(arr[i]); // Додавання примітивних елементів
        }
    }

    return result;
}

// Приклад багатовимірного масиву
let multiDimensionalArray = [1, [2, 3, [4, 5]], [6, [7, [8, 9]]]];

console.log(flattenArray(multiDimensionalArray));
