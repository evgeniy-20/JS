// Додайте клітинкам створеної таблиці можливість редагування.
let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let table = document.querySelector('.table');

// Створюємо заголовок таблиці
let header = document.createElement('tr');
['Name', 'Age', 'Salary'].forEach(text => {
    let th = document.createElement('th');
    th.textContent = text;
    header.appendChild(th);
});
table.appendChild(header);

// Створюємо рядки з даними
for (let employee of employees) {
    let row = document.createElement('tr');

    for (let key in employee) {
        let cell = document.createElement('td');
        cell.textContent = employee[key];
        cell.contentEditable = true; // Робимо клітинку редагованою

        // Збереження змін у масив при втраті фокусу
        cell.addEventListener('blur', function () {
            employee[key] = isNaN(employee[key]) ? cell.textContent : +cell.textContent;
        });

        row.appendChild(cell);
    }

    table.appendChild(row);
}
