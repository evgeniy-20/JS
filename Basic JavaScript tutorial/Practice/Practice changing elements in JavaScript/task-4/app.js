// Модифікуйте попереднє завдання так, щоб наприкінці кожної li стояло посилання 'видалити', за допомогою якого можна буде видалити цю li з ul.

let arr = ['Stas', 'Alina', 'Yura', 'Katya', 'Yevhen', 'Kristina'];
let list = document.querySelector('.elem');
let addList = document.querySelector('.addList');

// Функція створення кнопки "видалити"
function createDeleteButton(li) {
    let deleteButton = document.createElement('a');
    deleteButton.textContent = 'remove';
    deleteButton.href = '#';
    deleteButton.style.marginLeft = '20px';
    deleteButton.style.color = 'green';
    deleteButton.style.textDecoration = 'none';
    deleteButton.style.fontSize = '0.9em';

    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation(); // щоб не запускати редагування при кліку
        e.preventDefault(); // щоб не стрибала сторінка
        li.remove();
    });

    return deleteButton;
}

// Функція створення редагованого <li>
function createEditableLi(text) {
    let li = document.createElement('li');
    li.textContent = text;

    // Додаємо кнопку видалення
    let deleteBtn = createDeleteButton(li);
    li.appendChild(deleteBtn);

    // Редагування по кліку
    li.addEventListener('click', function () {
        // Якщо вже є input — не створювати новий
        if (li.querySelector('input')) return;

        let currentText = li.firstChild.textContent; // зберігаємо лише текст без кнопки
        let input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        li.innerHTML = ''; // очищаємо li
        li.appendChild(input);
        input.focus();

        input.addEventListener('blur', function () {
            li.innerHTML = input.value;
            li.appendChild(createDeleteButton(li));
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                input.blur();
            }
        });
    });

    return li;
}

// Додаємо початкові елементи
for (let elem of arr) {
    let li = createEditableLi(elem);
    list.appendChild(li);
}

// Додаємо нові елементи при натисканні Enter
addList.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && addList.value.trim() !== '') {
        let li = createEditableLi(addList.value.trim());
        list.appendChild(li);
        addList.value = ''; // Очистити поле
    }
});
