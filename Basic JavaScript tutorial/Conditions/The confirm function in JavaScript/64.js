// Запитайте користувача, чи є йому вже 18років. Якщо є, виведіть на екран алерт із текстом для дорослих, а якщо ні, виведіть повідомлення про те, що доступ користувачеві заборонено.

let question = confirm('Чи вам виповнилось 18 років?');
if (question) {
    console.log('Вхід дозволено');
} else {
    console.log('Вхід заборонено');
}
