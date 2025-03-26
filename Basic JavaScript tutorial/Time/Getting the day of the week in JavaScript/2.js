// Визначте, чи є поточний день тижня вихідним або робочим днем.

let date = new Date();
let day = date.getDay();
if (day === 0 || day === 6) {
    console.log('weekend');
} else {
    console.log('workday');
}
