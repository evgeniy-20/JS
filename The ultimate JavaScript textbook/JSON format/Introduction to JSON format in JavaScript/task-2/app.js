// Дано об'єкт:  Вручну перетворіть цей об'єкт у рядок у форматі JSON.

let obj = {
    a: 1,
    b: 2,
    c: 'eee',
    d: true,
};

let jsonString = JSON.stringify(obj);
console.log(jsonString)
