// Даний об'єкт: Переберіть цей об'єкт циклом та зведіть кожен елемент цього об'єкта у ква

let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    obj[key] = Math.pow(obj[key], 2);
}

console.log(obj);
