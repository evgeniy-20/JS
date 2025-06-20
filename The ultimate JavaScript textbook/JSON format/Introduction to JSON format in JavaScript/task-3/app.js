// Дано об'єкт: Вручну перетворіть цей об'єкт на рядок у форматі JSON.

let obj = {
    a: ['a', 'b', 'c',],
    b: '111',
    c: 'eee',
};

let jsonString = JSON.stringify(obj);
console.log(jsonString)
