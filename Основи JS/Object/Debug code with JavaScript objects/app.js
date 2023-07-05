//Код повинен вивести елемент об'єкта:

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

//Код повинен вивести елемент об'єкта по ключу зі змінної:

let obj1 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj[key]);

//Код має вивести суму елементів об'єкта:

let obj2 = {x: 1, y: 2, z: 3};
let sum = obj2['x'] + obj2['y'] + obj2['x'];

console.log(sum);

//Код повинен вивести кількість елементів об'єкта:

let obj3 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj3).length);