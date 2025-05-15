// Модифікуйте попередню задачу так, щоб наприкінці кожної li також стояло посилання 'перекреслити', за допомогою якого можна буде перекреслити текст цього тега li.

let arr = ['Stas', 'Alina', 'Yura', 'Katya', 'Yevhen', 'Kristina'];
let list = document.querySelector('.elem');
let addList = document.querySelector('.addList');

// Функція створення кнопки "видалити"
function createDeleteButton(li) {
    let deleteButton = document.createElement('a');
    deleteButton.textContent = 'видалити';
    deleteButton.href = '#';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.color = 'red';

    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        li.remove();
    });

    return deleteButton;
}

// Функція створення кнопки "перекреслити"
function createStrikeButton(li) {
    let strikeButton = document.createElement('a');
    strikeButton.textContent = 'перекреслити';
    strikeButton.href = '#';
    strikeButton.style.marginLeft = '10px';
    strikeButton.style.color = 'blue';

    strikeButton.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        li.style.textDecoration =
            li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    return strikeButton;
}

// Функція створення редагованого <li>
function createEditableLi(text) {
    let li = document.createElement('li');
    li.textContent = text;

    // Додаємо кнопки
    let deleteBtn = createDeleteButton(li);
    let strikeBtn = createStrikeButton(li);
    li.appendChild(strikeBtn);
    li.appendChild(deleteBtn);

    li.addEventListener('click', function () {
        if (li.querySelector('input')) return;

        let currentText = li.firstChild.textContent;
        let input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        li.innerHTML = '';
        li.appendChild(input);
        input.focus();

        input.addEventListener('blur', function () {
            li.innerHTML = input.value;
            li.appendChild(createStrikeButton(li));
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
        addList.value = '';
    }
});
