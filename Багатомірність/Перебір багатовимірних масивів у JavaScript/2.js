// Дано тривимірний масив з числами: За допомогою вкладених циклів знайдіть суму елементів цього масиву.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for (let subArr of arr) {
    for (let elemArr of subArr) {
        for (let elem of elemArr) {
            sum += elem;
        }
    }
}

console.log(sum);
