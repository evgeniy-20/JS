// Дано двомірний масив з числами: За допомогою вкладених циклів знайдіть суму елементів цього масиву.


let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArray of arr) {
    for (let elem of subArray) {
        sum += elem;
    }
}

console.log(sum);
