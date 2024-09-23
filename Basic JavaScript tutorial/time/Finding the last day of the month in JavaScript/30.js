// Оформіть цей спосіб розв'язання проблеми у вигляді функції, яка параметрами прийматиме місяць і рік і повертатиме номер останнього дня цього місяця.

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2024, 1));
