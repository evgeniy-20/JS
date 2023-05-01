//Створіть об'єкт із date ключами 'year'та значеннями, що відповідають поточному дню. Виведіть створену дату на екран у форматі рік-місяць-день . 'month''day'
const date = {
    'year': '2022',
    'month': '09',
    'day': '19'
}
const result = date.year + '-' + date.month + '-' + date.day;
console.log(result);