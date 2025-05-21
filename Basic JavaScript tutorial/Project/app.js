// Створюю масив з працівниками // Зроби так, щоб по кліку на ім’я, вік або зарплату — з’являвся input для редагування цього поля.Після зміни — значення повинно оновлюватися в масиві, і список перерендерюватися.
let employees = [
    { name: 'Stas', age: 33, salary: 7500 },
    { name: 'Alina', age: 32, salary: 6600 },
    { name: 'Yura', age: 31, salary: 6700 },
    { name: 'Katya', age: 31, salary: 5500 },
    { name: 'Yevhen', age: 27, salary: 2000 },
    { name: 'Kristina', age: 24, salary: 2000 }
];

// Створюю функцію renderEmployees(list)

let renderEmployees = (list) => {
    const elem = document.querySelector('.elem');
    elem.innerHTML = '';
    let ul = document.createElement('ul');
    list.forEach((employee, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${employee.name}</span> |
            <span>${employee.age}</span> |
            <span>${employee.salary}</span>
            <button data-index="${index}">Видалити</button>
        `;
        ul.appendChild(li);
    });

    elem.appendChild(ul);

    // Обробка видалення
    ul.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            let index = e.target.dataset.index;
            employees.splice(index, 1);  // Видаляємо з масиву
            renderEmployees(employees); // Перерисовуємо
        });
    });
    // Обробка редагування

    li.querySelectorAll('span').forEach((span, fieldIndex) => {
        span.addEventListener('click', () => {
            const fields = ['name', 'age', 'salary'];
            const field = fields[fieldIndex];
            const input = document.createElement('input');
            input.type = field === 'name' ? 'text' : 'number';
            input.value = employee[field];
            span.replaceWith(input);
            input.focus();

            input.addEventListener('blur', () => {
                employee[field] = field === 'name' ? input.value : +input.value;
                renderEmployees(employees); // Перерендер
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') input.blur();
            });
        });
    });
}
