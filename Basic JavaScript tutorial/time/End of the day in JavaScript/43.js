// Визначте скільки годин залишилося до кінця дня.
// Отримуємо поточний час
const now = new Date();

// Створюємо об'єкт Date для кінця дня (23:59:59)
const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

// Визначаємо різницю в мілісекундах між кінцем дня і поточним часом
const diffInMilliseconds = endOfDay - now;

// Перетворюємо мілісекунди на години
const hoursRemaining = diffInMilliseconds / (1000 * 60 * 60);

console.log(`До кінця дня залишилося ${hoursRemaining.toFixed(2)} годин.`);
