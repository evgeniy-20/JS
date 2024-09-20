// Визначте, скільки днів залишилося до найближчої неділі.

let date = new Date;

const isSunday = (date) => {
    let currentDay = date.getDay();
    let deysLeft = (7 - currentDay) % 7;
    return deysLeft === 0 ? 'Сьогодні неділя' : `До неділі залишилось: ${deysLeft} днів`;
};
console.log(isSunday(date));
