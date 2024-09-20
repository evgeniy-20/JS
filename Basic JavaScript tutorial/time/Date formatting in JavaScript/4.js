// Виведіть на екран поточну дату-час у форматі 12:59:59 31.12.2014 . Використовуйте для всіх частин дати (крім року) створену нами функцію для додавання нуля за потреби.

let date = new Date();

const addZero = (num) => (num >= 0 && num <= 9 ? '0' + num : num);

console.log(
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '.' +
    addZero(date.getMonth() + 1) + '.' +
    date.getFullYear()
);
