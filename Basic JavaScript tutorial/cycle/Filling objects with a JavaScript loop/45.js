// Дано два масиви: перший з назвами днів тижня, а другий - з їхніми порядковими номерами: За допомогою циклу створіть об'єкт, ключами якого будуть назви днів, а значення - їх номери.

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 1; i < 6; i++) {
    let key = arr1[1];
    let value = arr2[i];
    obj[key] = value;
};

console.log(obj);
