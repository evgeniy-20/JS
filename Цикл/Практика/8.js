// Даний масив із числами. За допомогою циклу знайдіть суму елементів цього масиву.

let arr = [1, 2, 15, 7, 17, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
