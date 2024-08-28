// Розв'яжіть попередні два завдання через цикл for.

let arr = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

// Перша задача

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }

// console.log(sum);

// Друга задача

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}

console.log(sum);
