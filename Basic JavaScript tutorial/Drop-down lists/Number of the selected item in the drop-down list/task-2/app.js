// Зробіть список, що випадає, з назвами днів тижня. Зробіть так, щоб JavaScript за замовчуванням вибирав у цьому списку поточний день.
let daysSelect = document.getElementById('daysSelect');

let today = new Date().getDay(); // Повертає число від 0 (Sunday) до 6 (Saturday)

daysSelect.selectedIndex = today;
