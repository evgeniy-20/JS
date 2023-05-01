//Код повинен вивести елемент об'єкта:

let obj1 = {x: 1, y: 2, z: 3};
console.log(obj1['x']);

//Код повинен вивести елемент об'єкта по ключу зі змінної:

let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj2[key]);

//Код має вивести суму елементів об'єкта:

let obj3 = {x: 1, y: 2, z: 3};
let sum = obj3.x + obj3.y + obj3.z;

console.log(sum);

//Код має вивести кількість елементів об'єкта:

const obj4 = {x: 1, y: 2, z: 3};
const result4 = Object.keys(obj4).length; 
console.log(result4);