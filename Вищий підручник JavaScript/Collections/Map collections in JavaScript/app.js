// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');

// console.log(map.get(arr1));
// console.log(map.get(arr2));

//Нехай дані 3 масиви. Створіть колекцію Map, зробіть ключами колекції ці масиви, а значеннями - якісь рядки.

let map = new Map;

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [5,6];

map.set(arr1, 'Yevhen');
map.set(arr2, 'Yuriy');
map.set(arr3, 'Stas');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));

//Нехай дані 3 об'єкта та 3 масива. Створіть колекцію Map, зробіть ключами колекції об'єкти, а значення - відповідні масиви.

let map1 = new Map;

let obj1 = {1: '1'};
let obj2 = {2: '2'};
let obj3 = {3: '3'};

let arr4 = ['Stas'];
let arr5 = ['Yuriy'];
let arr6 = ['Yevhen'];

map.set(obj1, arr4);
map.set(obj2, arr5);
map.set(obj3, arr6);

console.log(map.get(obj1));
console.log(map.get(obj2));
console.log(map.get(obj3));

