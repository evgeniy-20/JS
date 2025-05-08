// Реалізуйте генератор таблиць, ширину і висоту таблиць задають у двох інпутах (наприклад, таблиця 5 на 10 комірок).
document.querySelector('#generate').addEventListener('click', function () {
    let width = parseInt(document.querySelector('#width').value);
    let height = parseInt(document.querySelector('#height').value);
    let table = document.querySelector('#table');

    // Очистка таблиці перед новим створенням
    table.innerHTML = '';

    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let td = document.createElement('td');
            td.textContent = 'x';
            td.style.border = '1px solid black';
            td.style.padding = '5px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
