// Напишіть код, який покаже різницю між nextSibling і nextElementSibling.
const container = document.getElementById('container');

console.log('nextSibling:', container.nextSibling); // Текстовий вузол (text node)
console.log('nextElementSibling:', container.nextElementSibling); // <p>Це параграф</p>
