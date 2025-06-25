// Зробіть лічильник оновлення сторінки. Нехай лічильник обнуляється після того, як дійде до 10.

const STORAGE_KEY = 'counter';

// Отримати значення з localStorage або 0
let counter = Number(localStorage.getItem(STORAGE_KEY)) || 0;

// Збільшити лічильник
counter++;

// Якщо більше 10 — скинути на 1
if (counter > 10) {
    counter = 1;
}

// Зберегти нове значення
localStorage.setItem(STORAGE_KEY, counter);

// Вивести в DOM
document.getElementById('count').textContent = counter;
