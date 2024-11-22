// Переберіть об'єкт циклом for...in та виведіть всі ключі та значення.

let user = {
    name: 'Yevhen',
    surName: 'Prokopiv',
    age: 27
}
user.positions = 'frontend developer';

for (let key in user) {
    console.log(key, user[key]);
}
