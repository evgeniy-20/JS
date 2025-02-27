// Даний наступний об'єкт: Запишіть ключі об'єкта в один масив, а значення - в інший.

let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };

let arr1 = [];
let arr2 = [];

for (let elem in obj) {
    arr1.push(elem);
    arr2.push(obj[elem]);
}

console.log(arr1);
console.log(arr2);
