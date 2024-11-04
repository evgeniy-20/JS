// Модифікуйте попередню задачу так, щоб наприкінці кожної li також стояло посилання 'перекреслити', за допомогою якого можна буде перекреслити текст цього тега li.

let arrs = ['text1', 'text2', 'text3'];
let ul = document.createElement('ul');
document.body.appendChild(ul);

// Функція для створення редагованого елемента li
function createEditableListItem(text) {
    let li = document.createElement('li');

    // Створюємо input для редагування тексту
    let input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    input.style.display = 'none'; // Приховуємо input на початку

    // Створюємо span, який показує текст
    let span = document.createElement('span');
    span.textContent = text;

    // Додаємо подію для span, щоб почати редагування при натисканні
    span.addEventListener('click', () => {
        span.style.display = 'none';
        input.style.display = 'inline';
        input.focus();
    });

    // Додаємо подію для input, щоб завершити редагування при втраті фокусу
    input.addEventListener('blur', () => {
        span.textContent = input.value;
        input.style.display = 'none';
        span.style.display = 'inline';
    });

    // Створюємо кнопку "видалити"
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';

    // Додаємо подію для кнопки, щоб видалити li при натисканні
    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
    });

    // Створюємо посилання "перекреслити"
    let strikeLink = document.createElement('a');
    strikeLink.href = '#';
    strikeLink.textContent = 'Перекреслити';
    strikeLink.style.marginLeft = '10px';

    // Додаємо подію для перекреслення тексту
    strikeLink.addEventListener('click', (e) => {
        e.preventDefault();
        span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    // Додаємо span, input, кнопку видалення і посилання перекреслення в li
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(deleteButton);
    li.appendChild(strikeLink);

    return li;
}

// Додаємо елементи списку з arrs
arrs.forEach(text => {
    let li = createEditableListItem(text);
    ul.appendChild(li);
});