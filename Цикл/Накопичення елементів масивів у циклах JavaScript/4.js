// Даний масив: let arr = [2, 5, 9, 3, 1, 4]; Знайдіть добуток елементів цього масиву.

let arr = [2, 5, 9, 3, 1, 4];
let muptiplications = 1;

for (let i = 0; i < arr.length; i++) {
    muptiplications *= arr[i];
}

console.log(muptiplications);
