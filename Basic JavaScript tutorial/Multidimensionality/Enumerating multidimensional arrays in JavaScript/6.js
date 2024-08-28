// Дано тривимірний масив з числами: За допомогою вкладених циклів знайдіть суму елементів цього масиву.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0;

for (let sub of arr) {
    for (let subArr of sub) {
        for (let elem of subArr) {
            sum += elem
        }
    }
}

console.log(sum);
