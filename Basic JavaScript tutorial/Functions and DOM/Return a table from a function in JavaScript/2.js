// Нехай у нас є ось такий див з абзацами: За допомогою функції createTable створіть нову таблицю, а потім вставте її в кінець дива.
function createTable(rows, cols, parent) {
    // Перевірка коректності вхідних даних
    if (typeof rows !== 'number' || typeof cols !== 'number' || rows <= 0 || cols <= 0) {
        console.error('rows і cols повинні бути додатніми числами.');
        return;
    }

    // Створення таблиці та додавання стилів
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = `Row ${i + 1}, Col ${j + 1}`;
            td.style.border = '1px solid black';
            td.style.padding = '8px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Додавання таблиці до батьківського елемента
    parent.appendChild(table);
}

// Отримання елемента <div> з id "elem"
let container = document.getElementById('elem');

// Створення таблиці з 3 рядками і 4 колонками і вставка її в кінець дива
createTable(3, 4, container);
