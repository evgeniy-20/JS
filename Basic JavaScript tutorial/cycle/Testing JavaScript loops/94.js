// Дано такі масиви: За допомогою цих масивів створіть новий об'єкт, зробивши його ключами елементи першого масиву, а значення - елементи другого.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
};

console.log(obj);