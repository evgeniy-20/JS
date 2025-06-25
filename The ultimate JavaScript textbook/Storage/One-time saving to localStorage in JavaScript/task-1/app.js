// Після заходу користувача на сайт запишіть у локальне сховище поточний момент часу. Потім після повторного заходу виведіть, скільки минуло часу з попереднього заходу користувача на сайт.

const LAST_VISIT_KEY = 'lastVisit';

// Отримуємо попередній час
const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
const now = Date.now(); // Поточний час у мілісекундах

if (lastVisit === null) {
    // Перший візит
    localStorage.setItem(LAST_VISIT_KEY, now);
    console.log('Ви вперше на сайті!');
} else {
    // Візит не перший — обчислюємо різницю
    const timePassedMs = now - Number(lastVisit);
    const seconds = Math.floor(timePassedMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    console.log(`Минуло часу з попереднього візиту:
      ${hours} год, ${minutes % 60} хв, ${seconds % 60} сек`);

    // Оновлюємо час останнього візиту
    localStorage.setItem(LAST_VISIT_KEY, now);
}
