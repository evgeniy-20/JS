// Виведіть на екран поточну дату-час у форматі 12:59:59 31.12.2014. Використовуйте для всіх частин дати (крім року) створену нами функцію для додавання нуля за потреби.

const zeroBefore = (num) => {
    return num >= 0 && num <= 9 ? '0' + num : num;
}

const date = new Date();
const hours = zeroBefore(date.getHours());
const minutes = zeroBefore(date.getMinutes());
const seconds = zeroBefore(date.getSeconds());
const day = zeroBefore(date.getDate());
const month = zeroBefore(date.getMonth() + 1);
const year = zeroBefore(date.getFullYear());

console.log(`${hours}:${minutes}:${seconds} ${day}.${month}.${year}`);
