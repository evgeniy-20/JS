// Виведіть на екран HTML таблицю розміром 5 рядів на 5 колонок так, щоб у її клітинках послідовно стояли числа від 1 до 25.

let table = document.querySelector('#table');
let k = 1;
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = k;
        k++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
