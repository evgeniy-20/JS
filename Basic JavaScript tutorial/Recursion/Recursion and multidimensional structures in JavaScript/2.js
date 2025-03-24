// Дано багатовимірний масив довільного рівня вкладеності, наприклад, такий: Напишіть код, який розгорне наш багатовимірний масив в одновимірний. Для наведеного вище масиву це буде виглядати ось так: [1, 2, 7, 8, 3, 4, 5, 6, 7]

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function func(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(func(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(func(arr));
