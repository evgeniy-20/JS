// Сформуйте за допомогою двох вкладених циклів такий масив:[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
let arr = []
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr);
