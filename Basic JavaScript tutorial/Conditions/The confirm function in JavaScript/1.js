// Запитайте користувача, чи є йому вже 18років. Якщо є, виведіть на екран алерт із текстом для дорослих, а якщо ні, виведіть повідомлення про те, що доступ користувачеві заборонено.

let age = confirm('Are you 18 years old?');
if (age) {
    alert('Welcome to the adult content');
} else {
    alert('Access denied');
}
