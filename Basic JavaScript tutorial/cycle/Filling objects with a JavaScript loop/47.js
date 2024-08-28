//Даний об'єкт: Переберіть цей об'єкт циклом і створіть новий об'єкт так, щоб його ключами стали елементи старого об'єкта, а значення - ключі старого об'єкта.
let newObj = {};

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (let key in obj) {
    let value = obj[key];
    newObj[value] = key;
}

console.log(newObj);
