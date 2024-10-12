// Дано абзац. Напишіть код, який виведе повідомлення до цього абзацу через 10секунди після завантаження сторінки.

let paragraph = document.querySelector('#paragraph');
window.addEventListener('load', function () {
    setTimeout(function () {
        alert(paragraph.textContent);
    }, 10000);
});
