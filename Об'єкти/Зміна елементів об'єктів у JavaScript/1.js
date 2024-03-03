// Дано об'єкт: let obj = {x: 1, y: 2, z: 3}; Зведіть у квадрат кожен елемент цього об'єкта.

let obj = { x: 1, y: 2, z: 3 };

obj.x = Math.pow(obj.x, 2);
obj.y = Math.pow(obj.y, 2);
obj.z = Math.pow(obj.z, 2);

console.log(obj);
