// Зробіть під таблицею 3 інпути і кнопку для додавання нового працівника. Нехай в інпути вводяться ім'я, вік і зарплата, і після натискання на кнопку новий працівник додається в таблицю. Реалізуйте редагування комірок для знову доданих працівників.
let nameInput = document.querySelector('.name');
let ageInput = document.querySelector('.age');
let salaryInput = document.querySelector('.salary');
let addButton = document.querySelector('.button');
let table = document.querySelector('.table');

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

// Функція створення рядка працівника
function createEmployeeRow(employee) {
    let row = document.createElement('tr');

    for (let key in employee) {
        let cell = document.createElement('td');
        cell.textContent = employee[key];
        cell.contentEditable = true;

        // Зберігає зміну після редагування
        cell.addEventListener('blur', function () {
            employee[key] = key === 'name' ? cell.textContent : +cell.textContent;
        });

        row.appendChild(cell);
    }

    table.appendChild(row);
}

// Обробник натискання на кнопку
addButton.addEventListener('click', function () {
    let name = nameInput.value.trim();
    let age = parseInt(ageInput.value.trim());
    let salary = parseFloat(salaryInput.value.trim());

    if (name && !isNaN(age) && !isNaN(salary)) {
        let newEmployee = { name, age, salary };
        employees.push(newEmployee);
        createEmployeeRow(newEmployee);

        // Очистити поля вводу
        nameInput.value = '';
        ageInput.value = '';
        salaryInput.value = '';
    } else {
        alert('Please enter valid name, age, and salary.');
    }
});
