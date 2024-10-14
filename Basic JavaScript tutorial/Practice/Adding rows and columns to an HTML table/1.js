// Зробіть кнопку, за натисканням на яку до таблиці додаватиметься новий ряд.
let button = document.querySelector('#elem');
let table = document.querySelector('#table');
button.addEventListener('click', function () {
    let tr = document.createElement('tr');

    for (let i = 1; i <= 3; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table.appendChild(tr);
})
