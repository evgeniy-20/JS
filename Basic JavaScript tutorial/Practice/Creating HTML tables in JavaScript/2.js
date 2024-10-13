// Модифікуйте попередню задачу так, щоб таблиця створювалася розміром 10 рядків на 5 колонок.

let table = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = `Row ${i + 1}, Cell ${j + 1}`;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}
