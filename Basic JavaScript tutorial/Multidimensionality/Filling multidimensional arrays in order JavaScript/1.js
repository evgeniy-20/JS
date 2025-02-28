// Сформуйте за допомогою двох вкладених циклів наступний масив: [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
let num = 1;
for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 1; j <= 2; j++) {
        arr[i].push(num);
        num++;
    }
}

console.log(arr);
