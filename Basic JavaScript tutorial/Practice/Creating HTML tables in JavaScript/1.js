// Дано порожню HTML таблицю. За допомогою двох вкладених циклів for заповніть цю таблицю 5-ма рядами з 5-ма колонками.
let table = document.querySelector('#table');

for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = `Row ${i + 1}, Cell ${j + 1}`;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}
