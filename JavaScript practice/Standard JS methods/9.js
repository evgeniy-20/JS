// Дата: Створи функцію, яка обчислює, скільки днів залишилося до нового року.
const daysUntilNewYear = () => {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1); // 1 січня наступного року
    const diff = newYear - today; // Різниця у мілісекундах
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Перетворення на дні
};

console.log(`Днів до нового року: ${daysUntilNewYear()}`);
