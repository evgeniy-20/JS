// Створіть об'єкт з ключами від 1 до 12, як значень, що містить назви місяців. Виведіть цей об'єкт у консоль.

let obj = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
}
console.log(obj);

//

//Створіть об'єкт userі з ключами 'name', 'surname', 'patronymic' та якимись довільними значеннями. Виведіть на екран прізвище, ім'я та по батькові через пробіл.

let users = {
    'name': 'Yevhen',
    'patronymic': 'Volodymyrovych',
    'surname': 'Prokopiv'
}
console.log(users);


// Створіть об'єкт dateі з ключами 'year'та 'month' значеннями 'day' , що відповідають поточному дню. Виведіть створену дату на екран у форматі рік-місяць-день .

let date = {
    year: '2023',
    month: '06',
    day: '04'
}
console.log(date);

//Даний об'єкт: let obj = {x: 1, y: 2, z: 3}; Зведіть у квадрат кожен елемент цього об'єкта.

let obj1 = {x: 1, y: 2, z: 3};

console.log(obj1.x ** 2);
console.log(obj1.y ** 2);
console.log(obj1.z ** 2);

//Знайдіть кількість елементів у наступному об'єкті:

let obj2 = {x: 1, y: 2, z: 3};

console.log(Object.keys(obj2).length);

//Даний наступний об'єкт: Дана змінна key, в якій зберігається один із ключів нашого об'єкта. За допомогою цієї змінної виведіть відповідний елемент об'єкта.

let obj3 = {x: 1, y: 2, z: 3};

let key = 'y';
console.log(obj3[key]);

//У наступному коді ключ повинен був взятися зі змінної. Виправте помилку:

let key1 = 'x';

let obj4 = {
	[key1]: 1,
	y: 2,
	z: 3
};

console.log(obj4);

//Даний об'єкт:

// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// Дані змінні:

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// Зробіть так, щоб ключі об'єкта бралися із цих змінних.


let key2 = 'x';
let key3 = 'y';
let key4 = 'z';

let obj5 = {
	[key2]: 1,
	[key3]: 2,
	[key4]: 3
};

let obj6 = {d: 4, b: 5}

let arr = Object.keys(obj6);
console.log('b' in obj6);



const obj7 = {
    f: 7
} 
if('f' in obj7) {
    console.log('Ключ знайдено');
} else {
    console.log('Ключ не знайдено');
}

let arr1 = [1, 2, 3]
console.log(typeof arr1)




