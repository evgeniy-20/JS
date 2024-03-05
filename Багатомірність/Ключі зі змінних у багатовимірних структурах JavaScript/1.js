// Даний наступний об'єкт із назвами місяців: Виведіть на екран назву місяця, що відповідає значенням змінних langта month.
let months = {
    'ua': [
        "січень",
        "лютий",
        "березень",
        "квітень",
        "травень",
        "червень",
        "липень",
        "серпень",
        "вересень",
        "жовтень",
        "листопад",
        "грудень",
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
let lang = 'ua';
let month = 5;

console.log(months[lang][month]);
