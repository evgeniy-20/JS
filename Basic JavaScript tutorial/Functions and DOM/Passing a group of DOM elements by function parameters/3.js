// Дано масив і ul. За допомогою функції appendElem, створеної в попередньому завданні, запишіть кожен елемент масиву в окрему li в цьому ul.
function appendElem(ulElement, text) {
    const li = document.createElement('li');
    li.textContent = text;
    ulElement.appendChild(li);
}

// Основний код
const ulElement = document.querySelector('ul'); // Посилання на ul
const items = ["Елемент 1", "Елемент 2", "Елемент 3"]; // Масив елементів

// Додаємо кожен елемент масиву в ul як li
for (let item of items) {
    appendElem(ulElement, item);
}
