// Під списком зробіть форму для додавання нового працівника

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

// Створюємо <ul> для відображення працівників
let ul = document.createElement('ul');
document.body.appendChild(ul);

// Функція для створення редагованого елемента <span>
function createEditableField(value, onSave) {
    let span = document.createElement('span');
    span.textContent = value;

    // Додаємо подію на клік для початку редагування
    span.addEventListener('click', () => {
        let input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;

        // При натисканні Enter або виході з інпуту завершується редагування
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });

        // Функція для збереження змін
        function saveEdit() {
            span.textContent = input.value;
            onSave(input.value); // Оновлюємо дані у масиві працівників
            span.style.display = 'inline'; // Повертаємо видимість span
            input.remove(); // Видаляємо інпут
        }

        // Замінюємо <span> на <input>
        span.style.display = 'none';
        span.parentNode.insertBefore(input, span);
        input.focus();
    });

    return span;
}

// Функція для додавання працівника у список з можливістю редагування і видалення
function addEmployeeToList(employee) {
    let li = document.createElement('li');

    // Створюємо редаговані поля для імені, віку та зарплати
    li.appendChild(createEditableField(employee.name, (newValue) => employee.name = newValue));
    li.appendChild(document.createTextNode(", "));

    li.appendChild(createEditableField(employee.age, (newValue) => employee.age = newValue));
    li.appendChild(document.createTextNode(", "));

    li.appendChild(createEditableField(employee.salary, (newValue) => employee.salary = newValue));

    // Створюємо посилання на видалення
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = ' Видалити';

    // Додаємо подію для видалення <li> при натисканні на посилання
    deleteLink.addEventListener('click', (e) => {
        e.preventDefault(); // Запобігаємо переходу за посиланням
        ul.removeChild(li); // Видаляємо <li> зі списку
    });

    li.appendChild(deleteLink); // Додаємо посилання на видалення до <li>
    ul.appendChild(li); // Додаємо <li> до <ul>
}

// Додаємо кожного працівника до списку
employees.forEach(addEmployeeToList);

// Створюємо форму для додавання нового працівника
let form = document.createElement('form');
form.onsubmit = function (e) {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки

    let nameInput = document.getElementById('nameInput');
    let ageInput = document.getElementById('ageInput');
    let salaryInput = document.getElementById('salaryInput');

    // Додаємо нового працівника до масиву
    let newEmployee = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        salary: parseFloat(salaryInput.value)
    };

    employees.push(newEmployee); // Додаємо нового працівника до масиву
    addEmployeeToList(newEmployee); // Додаємо нового працівника до списку

    // Очищаємо поля форми
    nameInput.value = '';
    ageInput.value = '';
    salaryInput.value = '';
};

// Додаємо інпут-поля і кнопку до форми
let nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.placeholder = 'Ім\'я';
form.appendChild(nameInput);

let ageInput = document.createElement('input');
ageInput.id = 'ageInput';
ageInput.placeholder = 'Вік';
form.appendChild(ageInput);

let salaryInput = document.createElement('input');
salaryInput.id = 'salaryInput';
salaryInput.placeholder = 'Зарплата';
form.appendChild(salaryInput);

let submitButton = document.createElement('button');
submitButton.textContent = 'Додати працівника';
form.appendChild(submitButton);

// Додаємо форму під списком
document.body.appendChild(form);
