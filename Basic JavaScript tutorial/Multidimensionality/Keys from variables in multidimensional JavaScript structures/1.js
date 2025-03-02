//  Даний наступний об'єкт із назвами місяців:

let months = {
    'ua': [
        'січень',
        'лютий',
        'березень',
        'квітень',
        'травень',
        'червень',
        'липень',
        'серпень',
        'вересень',
        'жовтень',
        'листопад',
        'грудень',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
// Дано також такі змінні:

let lang = 'ua';
let month = 5;
// Виведіть на екран назву місяця, що відповідає значенням змінних langта month.

console.log(months[lang][month]);
