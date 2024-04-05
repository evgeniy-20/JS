// Даний багатовимірний масив довільного рівня вкладеності, наприклад, такий:[1, [2, 7, 8], [3, 4, [5, [6, 7]]]] Напишіть код, який розгорне наш багатовимірний масив у одновимірний. Для наведеного вище масиву це буде виглядати так: [1, 2, 7, 8, 3, 4, 5, 6, 7]

function flattenArray(arr) {
    let flatArray = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });

    return flatArray;
}

const nestedArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
