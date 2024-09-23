// Визначте, скільки годин пройшло між початком дня та поточним моментом часу.
// Отримуємо поточний час
const now = new Date();

// Створюємо об'єкт Date для початку дня (опівночі)
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

// Визначаємо різницю в мілісекундах між поточним часом і початком дня
const diffInMilliseconds = now - startOfDay;

// Перетворюємо мілісекунди на години
const hoursPassed = diffInMilliseconds / (1000 * 60 * 60);

console.log(`Пройшло ${hoursPassed} годин з початку дня.`);
