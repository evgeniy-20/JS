//Даний масив: let arr = [2, 5, 9, 3, 1, 4];
//Знайдіть суму елементів цього масиву.

let arr1 = [2, 5, 9, 3, 1, 4];
let sum1 = 0;
for(let elem of arr1) {
    sum1 += elem;
}
console.log(sum1)
//Даний масив:

// let arr = [2, 5, 9, 3, 1, 4];
// Знайдіть суму елементів, які є парними числами.

let arr2 = [2, 5, 9, 3, 1, 4];
let sum2 = 0;
for(let elem of arr2) {
    if(elem % 2 === 0) {
        sum2 += elem;
    }
}
console.log(sum2)

// Даний масив: let arr = [2, 5, 9, 3, 1, 4];
// Знайдіть суму квадратів елементів цього масиву.

let arr3 = [2, 5, 9, 3, 1, 4];
let sqrt = 0;
let sum3 = 0;
for(let elem of arr3) {
    sqrt = Math.pow(elem, 2);
    sum3 += sqrt;
}
console.log(sum3)

// Даний масив: let arr = [2, 5, 9, 3, 1, 4];
// Знайдіть добуток елементів цього масиву.

let arr4 = [2, 5, 9, 3, 1, 4];
let product = 1;
for(let elem of arr4) {
    product *= elem;
}
console.log(product);