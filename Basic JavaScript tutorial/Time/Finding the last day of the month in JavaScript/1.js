//  Оформіть цей спосіб розв'язання проблеми у вигляді функції, яка параметрами прийматиме місяць і рік і повертатиме номер останнього дня цього місяця.

function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2025, 3));
