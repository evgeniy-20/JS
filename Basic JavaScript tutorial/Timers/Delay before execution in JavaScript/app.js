// Дано абзац. Напишіть код, який виведе повідомлення до цього абзацу через 10секунди після завантаження сторінки.

let name = document.querySelector('#name');
let teaxt = setTimeout(() => {
    name.innerHTML = 'I love Kristina';
}, 10000);
