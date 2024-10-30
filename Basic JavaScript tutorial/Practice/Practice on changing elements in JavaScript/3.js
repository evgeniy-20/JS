// Модифікуйте попереднє завдання так, щоб під списком був інпут, за допомогою якого можна буде додати новий елемент у кінець списку ul. Зробіть так, щоб нові li також можна було редагувати.

let arrs = ['text1', 'text2', 'text3'];
let ul = document.createElement('ul');
document.body.appendChild(ul);
// Функція для створення редагованого елемента li
function createEditableListItem(text) {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'text';
    input.value = text;

    // Приховуємо інпут для редагування на початку
    input.style.display = 'none';

    // Створюємо span, який показує текст
    let span = document.createElement('span');
    span.textContent = text;

    // Додаємо подію для span, щоб почати редагування при натисканні
    span.addEventListener('click', () => {
        span.style.display = 'none';
        input.style.display = 'inline';
        input.focus();
    });

    // Додаємо подію для input, щоб завершити редагування при натисканні Enter
    input.addEventListener('blur', () => {
        span.textContent = input.value;
        input.style.display = 'none';
        span.style.display = 'inline';
    });

    // Додаємо span та input в li
    li.appendChild(span);
    li.appendChild(input);

    return li;
}

// Додаємо елементи з масиву до списку
for (let arr of arrs) {
    ul.appendChild(createEditableListItem(arr));
}

// Створюємо інпут для додавання нових елементів
let addItemInput = document.createElement('input');
addItemInput.type = 'text';
addItemInput.placeholder = 'Додати новий елемент';
document.body.appendChild(addItemInput);

// Обробник події для додавання нового елемента при натисканні Enter
addItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && addItemInput.value.trim() !== '') {
        ul.appendChild(createEditableListItem(addItemInput.value.trim()));
        addItemInput.value = ''; // Очищуємо інпут після додавання
    }
});
