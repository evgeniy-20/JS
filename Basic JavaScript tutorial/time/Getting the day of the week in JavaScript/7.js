// Визначте, чи поточний день тижня є вихідним або робочим днем.
let date = new Date
const isWekend = (date) => {
    return date === 0 || date === 6 ? 'Сьогодні вихідний' : 'Сьогодні робочий день'
};
console.log(isWekend(date.getDay()));
