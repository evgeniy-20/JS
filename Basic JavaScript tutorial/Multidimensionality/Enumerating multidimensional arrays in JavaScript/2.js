// Дано тривимірний масив з числами: За допомогою вкладених циклів знайдіть суму елементів цього масиву.

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let arr1 of arr) {
    for (let arr2 of arr1) {
        for (let arr3 of arr2) {
            sum += arr3;
        }
    }
}

console.log(sum);
