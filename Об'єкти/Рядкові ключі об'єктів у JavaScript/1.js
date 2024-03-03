// Створіть об'єкт user з ключами 'name', 'surname', 'patronymic' з якимись довільними значеннями. Виведіть на екран прізвище, ім'я та по батькові через пробіл.

let user = {
    name: 'Yevhen ',
    patronymic: 'Volodymyrovych ',
    surname: 'Prokopiv'
}
let result = user['name'] + user['patronymic'] + user['surname'];
console.log(result);
