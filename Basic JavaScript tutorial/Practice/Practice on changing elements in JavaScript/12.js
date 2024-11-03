// Додайте клітинкам створеної таблиці можливість редагування.

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
    // Функція для створення редагованої комірки
    function createEditableCell(value) {
        let td = document.createElement('td');
        td.textContent = value;

        // Додаємо подію на клік для редагування
        td.addEventListener('click', () => {
            let input = document.createElement('input');
            input.type = 'text';
            input.value = td.textContent;

            // Замінюємо вміст комірки на поле вводу
            td.textContent = '';
            td.appendChild(input);

            // Функція для завершення редагування
            function finishEditing() {
                td.textContent = input.value;
            }

            // Завершення редагування при натисканні Enter або втраті фокусу
            input.addEventListener('blur', finishEditing);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    finishEditing();
                }
            });

            // Фокусуємо поле вводу для зручності
            input.focus();
        });

        return td;
    }

    // Додаємо комірки з редагуванням для кожного поля працівника
    tr.appendChild(createEditableCell(employee.name));
    tr.appendChild(createEditableCell(employee.age));
    tr.appendChild(createEditableCell(employee.salary));
    table.appendChild(tr);
}

// Додаємо таблицю до вибраного елемента
elems.appendChild(table);
