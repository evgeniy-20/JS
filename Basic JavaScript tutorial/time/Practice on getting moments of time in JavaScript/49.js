// Визначте, який рік був 3місяць тому.

// Отримати поточну дату
let now = new Date();

// Відняти три місяці
now.setMonth(now.getMonth() - 3);

// Отримати рік
let yearThreeMonthsAgo = now.getFullYear();

console.log(`Три місяці тому був ${yearThreeMonthsAgo} рік.`);
