// Реалізуйте генератор таблиць, ширину і висоту таблиць задають у двох інпутах (наприклад, таблиця 5 на 10 комірок).
document.getElementById('generate').addEventListener('click', function () {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const table = document.getElementById('table');

    // Очищення таблиці перед генерацією нової
    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = `Row ${i + 1}, Cell ${j + 1}`; // Додаємо текст до ячейок
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
});
