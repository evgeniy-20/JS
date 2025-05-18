// Зробіть так, щоб за кліком на ім'я, вік або зарплату працівника з'являвся інпут для редагування цього поля.

let elem = document.querySelector('.elem');

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

let ul = document.createElement('ul');

for (let employee of employees) {
    let li = document.createElement('li');

    // Створимо окремі спани для кожного поля
    for (let key of ['name', 'age', 'salary']) {
        let span = document.createElement('span');
        span.textContent = employee[key];
        span.style.marginRight = '10px';
        span.style.cursor = 'pointer';

        // Додаємо слухач кліку для редагування
        span.addEventListener('click', function () {
            let input = document.createElement('input');
            input.type = (key === 'age' || key === 'salary') ? 'number' : 'text';
            input.value = span.textContent;

            span.replaceWith(input);
            input.focus();

            // Обробка збереження при blur або Enter
            function save() {
                span.textContent = input.value;
                employee[key] = input.value; // Оновлюємо об'єкт
                input.replaceWith(span);
            }

            input.addEventListener('blur', save);
            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    input.blur(); // викликає save()
                }
            });
        });

        li.appendChild(span);
    }

    ul.appendChild(li);
}

elem.appendChild(ul);
