// Складіть масив дней недели. За допомогою циклу for виведіть усі дні тижня, а поточний день виведіть курсивом . Номер поточного дня повинен зберігатися у змінній day.

let arr = ['пн', 'вт', 'cр', 'чт', 'пт', 'сб', 'нд'];
let day = 3;
for (let i = 0; i < arr.length; i++) {
    if (i === day) {
        document.write('<i>' + arr[i] + '</i><br>')
    } else {
        document.write(arr[i] + '<br>')
    }
}
