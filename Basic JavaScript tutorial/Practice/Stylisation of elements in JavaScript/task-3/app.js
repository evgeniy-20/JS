// Дано деяку HTML таблицю. Додайте в цю таблицю ще одну колонку з посиланням. Після натискання на це посилання рядок із цим посиланням має стати зеленого фону.

let rows = document.querySelectorAll('.table tr');

for (let row of rows) {
    let cells = row.querySelectorAll('td');

    // Пропускаємо рядки без <td> (наприклад, заголовки)
    if (cells.length === 0) continue;

    let link = document.createElement('a');
    link.href = '#';
    link.innerHTML = 'Посилання';

    link.addEventListener('click', function (e) {
        e.preventDefault();

        for (let cell of cells) {
            cell.style.backgroundColor = 'green';
        }
    });

    // Додаємо посилання в останню клітинку (або нову, якщо треба)
    let lastCell = cells[cells.length - 1];
    lastCell.appendChild(link);
}
