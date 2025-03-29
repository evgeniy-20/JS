// Зробіть функцію checkDate, яка виконуватиме описану перевірку. Нехай функція повертає true, якщо дата коректна і false, якщо ні. Приклад роботи цієї функції для 31 січня і 32 січня:

const checkDate = (year, month, day) => {
    let date = new Date(year, month, day);

    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return ('корректна');
    } else {
        return ('некорректна');
    }
}

console.log(checkDate(2025, 0, 31));
