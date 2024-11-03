// Зробіть так, щоб за кліком на ім'я, вік або зарплату працівника з'являвся інпут для редагування цього поля.

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

// Виводимо кожного працівника у <li> та додаємо можливість редагування
employees.forEach(employee => {
    let li = document.createElement('li');

    // Створюємо редаговані поля для імені, віку та зарплати
    li.appendChild(createEditableField(employee.name, (newValue) => employee.name = newValue));
    li.appendChild(document.createTextNode(", "));

    li.appendChild(createEditableField(employee.age, (newValue) => employee.age = newValue));
    li.appendChild(document.createTextNode(", "));

    li.appendChild(createEditableField(employee.salary, (newValue) => employee.salary = newValue));

    ul.appendChild(li); // Додаємо <li> в <ul>
});
