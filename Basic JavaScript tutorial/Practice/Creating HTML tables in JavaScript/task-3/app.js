// Модифікуйте попереднє завдання так, щоб у кожну td додавався текст 'x'.

let table = document.querySelector('#table');
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent += 'x';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
