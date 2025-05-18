// Зробіть так, щоб за кліком на ім'я, вік або зарплату працівника з'являвся інпут для редагування цього поля.

let elem = document.querySelector('.elem');

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let ul = document.createElement('ul');
elem.appendChild(ul);

function createEmployeeLi(employee) {
    let li = document.createElement('li');

    for (let key of ['name', 'age', 'salary']) {
        let span = document.createElement('span');
        span.textContent = employee[key];
        span.style.marginRight = '10px';
        span.style.cursor = 'pointer';

        span.addEventListener('click', function () {
            let input = document.createElement('input');
            input.type = (key === 'age' || key === 'salary') ? 'number' : 'text';
            input.value = span.textContent;

            span.replaceWith(input);
            input.focus();

            function save() {
                span.textContent = input.value;
                employee[key] = input.value;
                input.replaceWith(span);
            }

            input.addEventListener('blur', save);
            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
        });

        li.appendChild(span);
    }

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Видалити';
    deleteLink.style.marginLeft = '20px';
    deleteLink.style.color = 'red';
    deleteLink.style.cursor = 'pointer';

    deleteLink.addEventListener('click', function (e) {
        e.preventDefault();
        li.remove();
    });

    li.appendChild(deleteLink);
    ul.appendChild(li);
}

// Початкові працівники
for (let employee of employees) {
    createEmployeeLi(employee);
}

// Обробка форми додавання
document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let age = document.getElementById('age').value.trim();
    let salary = document.getElementById('salary').value.trim();

    if (name && age && salary) {
        let newEmployee = {
            name: name,
            age: +age,
            salary: +salary
        };
        employees.push(newEmployee);
        createEmployeeLi(newEmployee);

        // Очищаємо поля
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('salary').value = '';
    }
});
