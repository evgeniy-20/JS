// Нехай дано 3 об'єкти і 3 масиви. Створіть колекцію Map, зробіть ключами колекції об'єкти, а значеннями - відповідні масиви.

let user1 = { name: 'Kristina', age: 25 };
let user2 = { name: 'Yevhen', age: 27 };
let user3 = { name: 'Oleg', age: 26 };
let arr1 = ['apple', 'banana', 'carrot'];
let arr2 = ['day', 'night', 'evening'];
let arr3 = ['red', 'green', 'blue'];

let map = new Map();
map.set(user1, arr1);
map.set(user2, arr2);
map.set(user3, arr3);
console.log(map);
