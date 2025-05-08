// Дано також кнопку. Зробіть так, щоб після натискання на кнопку таблиця збільшувалася на один ряд і на одну колонку.

let table = document.querySelector('#table');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let rows = table.rows;
    for (let row of rows) {
        let newCell = document.createElement('td');
        newCell.textContent = 'New cell';
        row.appendChild(newCell);
    }

    // 2. Створюємо новий рядок з кількістю клітинок, яка дорівнює кількості колонок після додавання
    let newRow = document.createElement('tr');
    let columnCount = rows[0] ? rows[0].cells.length : 1;

    for (let i = 0; i < columnCount; i++) {
        let newCell = document.createElement('td');
        newCell.textContent = 'New cell';
        newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
})
