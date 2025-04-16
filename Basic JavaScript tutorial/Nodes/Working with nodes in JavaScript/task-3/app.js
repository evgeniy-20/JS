// Напишіть код, який покаже різницю між previousSibling і previousElementSibling.
const container = document.getElementById('container');

console.log('previousSibling:', container.previousSibling); // Текстовий вузол (text node)
console.log('previousElementSibling:', container.previousElementSibling); // <p>Це параграф</p>
