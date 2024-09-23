// Зробіть функцію checkDate, яка виконуватиме перевірку. Нехай функція повертає true, якщо дата коректна і falseякщо ні. Приклад роботи цієї функції для 31січня та 32січня:

const checkDate = (year, month, day) => {
    let date = new Date(year, month, day);
    return date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day;
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));
