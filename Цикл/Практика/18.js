// Складіть масив дней недели. За допомогою циклу forвиведіть усі дні тижня, а поточний день виведіть курсивом . Номер поточного дня повинен зберігатися у змінній day.

let daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let day = new Date().getDay();

for (let i = 0; i < daysOfWeek.length; i++) {
    if (i === day) {
        console.log(daysOfWeek[i].italics());
    } else {
        console.log(daysOfWeek[i]);
    }
}
