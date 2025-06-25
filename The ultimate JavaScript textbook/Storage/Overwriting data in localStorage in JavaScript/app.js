// Користувач заходить на сайт, потім оновлює сторінку, потім ще раз оновлює і так далі. Зробіть лічильник оновлення сторінки. Щоразу під час оновлення виводьте значення лічильника на екран.

const STORAGE_KEY = 'counter';

// Отримуємо поточне значення або встановлюємо 0
let counter = localStorage.getItem(STORAGE_KEY);

if (counter === null) {
    counter = 1;
} else {
    counter = Number(counter) + 1;
}

// Зберігаємо оновлене значення
localStorage.setItem(STORAGE_KEY, counter);

// Виводимо на екран
document.getElementById('count').textContent = counter;
