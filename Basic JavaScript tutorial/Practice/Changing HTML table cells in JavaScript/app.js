// Нехай дано деяку HTML-таблицю з числами і кнопку. Після натискання на кнопку збільште число в кожній комірці таблиці вдвічі.
let table = document.querySelector('table');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    // Проходимо всі рядки
    for (let row of table.rows) {
        // Проходимо всі клітинки в рядку
        for (let cell of row.cells) {
            let value = parseFloat(cell.textContent);
            if (!isNaN(value)) {
                cell.textContent = value * 2;
            }
        }
    }
});
