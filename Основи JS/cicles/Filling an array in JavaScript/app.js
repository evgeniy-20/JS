//Використовуючи цикл та метод push заповніть масив числами від 1до 10.

let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

//Використовуючи цикл і метод push заповніть масив - 10ма літерами 'x'.

let arr1 = [];
for(let i = 1; i <= 10; i++) {
    arr1.push('x');
}
console.log(arr1);

//Даний масив із числами. Переберіть його циклом і запишіть у новий масив лише позитивні числа.

let arr2 = [1,-2,3,-4,5,-6,7,-8,9,10];
let newArr = [];
for(let i = 0; i <= arr2.length; i++) {
    if(arr2[i] > 0) {
        newArr.push(arr2[i]);
    }
}
console.log(newArr);