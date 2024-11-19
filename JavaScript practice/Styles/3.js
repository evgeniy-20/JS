// Створіть сторінку з елементом, фон якого змінюється кожні 2 секунди (виберіть будь-які кольори на свій розсуд). Використовуйте для цього setInterval.
// Массив кольорів
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let currentIndex = 0;

// Отримуємо елемент
const elem = document.querySelector('#elem');

// Функція для зміни кольору
function changeBackground() {
    elem.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Виклик функції кожні 2 секунди
setInterval(changeBackground, 2000);
