// Дано HTML таблицю. Додайте в неї ще одну колонку, в якій для кожного ряду таблиці буде стояти посилання на видалення цього ряду.

let elems = document.querySelectorAll('#parent tr');

// Пропускаємо перший ряд (заголовок)
for (let i = 1; i < elems.length; i++) {
    let elem = elems[i];

    // Створюємо нову комірку
    let deleteCell = elem.insertCell(-1);

    // Створюємо кнопку або посилання для видалення
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Додаємо обробник події для видалення ряду
    deleteButton.addEventListener('click', function () {
        elem.remove();
    });

    // Вставляємо кнопку в комірку
    deleteCell.appendChild(deleteButton);
}
