// Зробіть список, що випадає, з назвами місяців. Зробіть так, щоб JavaScript за замовчуванням вибирав у цьому списку поточний місяць.

const monthSelect = document.querySelector('#monthSelect');

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// Додаємо місяці у список
for (let i = 0; i < months.length; i++) {
    let option = document.createElement('option');
    option.textContent = months[i];
    option.value = months[i];
    monthSelect.appendChild(option);
}

// Встановлюємо поточний місяць за замовчуванням
let currentMonthIndex = new Date().getMonth(); // від 0 до 11
monthSelect.value = months[currentMonthIndex];
