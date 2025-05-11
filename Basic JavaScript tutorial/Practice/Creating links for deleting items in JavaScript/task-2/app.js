// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

let table = document.querySelector('#table');

for (let row of table.rows) {
    let td = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '#';
    remove.innerHTML = 'remove';

    remove.addEventListener('click', function (event) {
        row.remove();
        event.preventDefault();
    });

    td.appendChild(remove);
    row.appendChild(td);
}
