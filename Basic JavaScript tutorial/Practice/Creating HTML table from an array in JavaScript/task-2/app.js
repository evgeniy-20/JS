// Модифікуйте попередню задачу так, щоб у таблицю записувалися не елементи, а квадрати цих елементів.

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let table = document.querySelector('#table');
for (let subArray of arr) {
    let tr = document.createElement('tr');
    for (let elem of subArray) {
        let td = document.createElement('td');
        td.textContent = Math.pow(elem, 2); // Заміна elem на Math.pow(elem, 2) для обчислення квадрата
        td.style.border = '1px solid black'
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
