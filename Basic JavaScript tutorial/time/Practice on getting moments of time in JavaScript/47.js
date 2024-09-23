// Визначте, скільки днів лишилося до нового року.
// Отримати поточну дату
let now = new Date();

// Визначити дату наступного Нового року
let nextNewYear = new Date(now.getFullYear() + 1, 0, 1); // 1 січня наступного року

// Обчислити різницю в мілісекундах між поточною датою і Новим роком
let diffInMillis = nextNewYear - now;

// Перетворити мілісекунди в дні
let daysUntilNewYear = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

console.log(`До Нового року залишилося ${daysUntilNewYear} днів`);
