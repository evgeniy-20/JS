// Даний масив: Знайдіть суму елементів, які є парними числами.

let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;

for (let elem of arr) {
    if (elem % 2 === 0) {
        sum += elem;
    }
}

console.log(sum);
