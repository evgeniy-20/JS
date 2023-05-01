//На екрані виведіть номер поточного дня тижня.

let day = new Date;
console.log(day.getDay());

//Визначте, чи поточний день тижня є вихідним або робочим днем.

let day1 = new Date;
if(day1 === 0 && day1 === 6) {
    console.log(day1.getDay());
} else {
    console.log('No');
}

//Визначте, скільки днів залишилося до найближчої неділі.