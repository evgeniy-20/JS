// Дано дату, що містить місяць і день. Визначте знак Зодіаку, на який припадає дат
function getZodiacSign(date) {
    const [month, day] = date.split('-').map(Number);

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Водолій';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Риби';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Овен';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Телець';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return 'Близнюки';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return 'Рак';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Лев';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Діва';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return 'Терези';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return 'Скорпіон';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Стрілець';
    } else {
        return 'Козеріг'; // 22 грудня - 19 січня
    }
}

const date = '09-23'; // Наприклад
const zodiacSign = getZodiacSign(date);
console.log(`Знак Зодіаку: ${zodiacSign}`);
