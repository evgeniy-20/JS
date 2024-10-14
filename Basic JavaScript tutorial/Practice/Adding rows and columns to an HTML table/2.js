// Дано також кнопку. Зробіть так, щоб після натискання на кнопку таблиця збільшувалася на один ряд і на одну колонку.


let table = document.getElementById('table');
let button = document.getElementById('addRowCol');

button.addEventListener('click', function () {
    // Додаємо новий ряд
    let newRow = document.createElement('tr');

    // Додаємо комірки в новий ряд (кількість має відповідати кількості колонок)
    let numCols = table.rows[0].cells.length;
    for (let i = 0; i < numCols + 1; i++) {
        let newCell = document.createElement('td');
        newRow.appendChild(newCell);
    }
    table.appendChild(newRow);

    // Додаємо нову комірку в кожен існуючий ряд
    for (let i = 0; i < table.rows.length - 1; i++) {
        let newCell = document.createElement('td');
        table.rows[i].appendChild(newCell);
    }
});
