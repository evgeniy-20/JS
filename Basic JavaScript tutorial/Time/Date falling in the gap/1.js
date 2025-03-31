// Дано дату, що містить місяць і день. Визначте знак Зодіаку, на яку припадає ця дата.
// Змінна зодіаку

let zodiac = '';

let date = new Date('2025-06-10');

let month = date.getMonth() + 1;
let day = date.getDate();

if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiac = 'Водолій';
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiac = 'Риби';
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    zodiac = 'Овен';
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    zodiac = 'Телець';
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiac = 'Близнюки';
} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    zodiac = 'Рак';
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiac = 'Лев';
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiac = 'Діва';
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    zodiac = 'Терези';
} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    zodiac = 'Скорпіон';
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zodiac = 'Стрілець';
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    zodiac = 'Козеріг';
}

console.log(zodiac);
