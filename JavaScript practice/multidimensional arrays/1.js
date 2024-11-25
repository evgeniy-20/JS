// Створіть двовимірний масив розміром 3x3, заповнений числами від 1 до 9.
let arr = [];
let counter = 1;

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = counter++;
    }
}

console.log(arr);
