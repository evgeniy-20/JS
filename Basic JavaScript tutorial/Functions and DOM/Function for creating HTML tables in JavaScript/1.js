// Ось заготівля описаної функції: тут створимо таблицю з rows рядами і cols колонками  Допишіть код представленої вище заготовки функції. Потестуйте роботу готової функції.

function createTable(rows, cols, parent) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = `Row${i + 1}, Col${j + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}

let container = document.getElementById('table-container');
createTable(3, 4, container);
