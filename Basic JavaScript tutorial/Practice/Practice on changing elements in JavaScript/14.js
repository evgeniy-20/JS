// Зробіть під таблицею 3 інпути і кнопку для додавання нового працівника. Нехай в інпути вводяться ім'я, вік і зарплата, і після натискання на кнопку новий працівник додається в таблицю. Реалізуйте редагування комірок для знову доданих працівників.

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
let headers = ['Name', 'Age', 'Salary', 'Actions'];
headers.forEach(headerText => {
    let th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

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

// Функція для додавання нового рядка з працівником
function addEmployeeRow(employee) {
    let tr = document.createElement('tr');

    // Додаємо редаговані комірки
    tr.appendChild(createEditableCell(employee.name));
    tr.appendChild(createEditableCell(employee.age));
    tr.appendChild(createEditableCell(employee.salary));

    // Додаємо комірку з посиланням "Видалити"
    let deleteTd = document.createElement('td');
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Видалити';

    // Додаємо подію для видалення рядка
    deleteLink.addEventListener('click', (e) => {
        e.preventDefault();
        table.removeChild(tr);
    });

    deleteTd.appendChild(deleteLink);
    tr.appendChild(deleteTd);

    table.appendChild(tr);
}

// Додаємо працівників, які вже є у масиві
employees.forEach(addEmployeeRow);

// Додаємо таблицю до вибраного елемента
elems.appendChild(table);

// Створюємо елементи для введення нового працівника
let nameInput = document.createElement('input');
nameInput.placeholder = 'Name';

let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Age';

let salaryInput = document.createElement('input');
salaryInput.type = 'number';
salaryInput.placeholder = 'Salary';

let addButton = document.createElement('button');
addButton.textContent = 'Додати працівника';

// Додаємо подію на кнопку для додавання нового працівника
addButton.addEventListener('click', () => {
    let name = nameInput.value;
    let age = parseInt(ageInput.value);
    let salary = parseFloat(salaryInput.value);

    if (name && !isNaN(age) && !isNaN(salary)) {
        let newEmployee = { name, age, salary };
        addEmployeeRow(newEmployee);

        // Очищуємо інпути після додавання
        nameInput.value = '';
        ageInput.value = '';
        salaryInput.value = '';
    } else {
        alert('Будь ласка, введіть коректні дані для працівника.');
    }
});

// Додаємо інпути та кнопку під таблицею
elems.appendChild(nameInput);
elems.appendChild(ageInput);
elems.appendChild(salaryInput);
elems.appendChild(addButton);
