// Створіть об'єкт user з ключами 'name', 'surname', 'patronymic' і якимись довільними значеннями. Виведіть на екран прізвище, ім'я та по батькові через пробіл.

let user = {
    name: 'Yevhen',
    patronymic: 'Volodymyrovych',
    surname: 'Prokopiv'
}

console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);
