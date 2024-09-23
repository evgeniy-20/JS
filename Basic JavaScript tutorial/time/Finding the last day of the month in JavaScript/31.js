// Визначте, який день тижня буде в останньому дні п'ятого місяця 2025 року.

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2025, 5));
