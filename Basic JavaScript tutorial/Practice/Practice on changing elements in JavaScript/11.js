// Дано такий масив із працівниками: Виведіть цих працівників у HTML-таблиці.
let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

// Знаходимо елемент, де буде розміщена таблиця
let elems = document.querySelector('#elems');

// Створюємо таблицю
let table = document.createElement('table');
table.border = '1';

// Створюємо заголовок таблиці
let headerRow = document.createElement('tr');
let headers = ['Name', 'Age', 'Salary'];
headers.forEach(headerText => {
    let th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Додаємо працівників як рядки таблиці
for (let employee of employees) {
    let tr = document.createElement('tr');

    // Додаємо комірки з даними
    let nameTd = document.createElement('td');
    nameTd.textContent = employee.name;
    tr.appendChild(nameTd);

    let ageTd = document.createElement('td');
    ageTd.textContent = employee.age;
    tr.appendChild(ageTd);

    let salaryTd = document.createElement('td');
    salaryTd.textContent = employee.salary;
    tr.appendChild(salaryTd);

    table.appendChild(tr);
}

// Додаємо таблицю до вибраного елемента
elems.appendChild(table);
