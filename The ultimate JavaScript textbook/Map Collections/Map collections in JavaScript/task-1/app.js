// Нехай дано 3 масиви. Створіть колекцію Map, зробіть ключами колекції ці масиви, а значеннями - якісь рядки.

let array1 = [1, 2, 3];
let array2 = [5, 6, 7];
let array3 = [7, 8, 9];
let arrays = new Map();
arrays.set(array1, 'First array');
arrays.set(array2, 'Second array');
arrays.set(array3, 'Thirt array');
console.log(arrays.get(array1));
console.log(arrays.get(array2));
console.log(arrays.get(array3));
