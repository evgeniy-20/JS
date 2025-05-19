// Зробіть функцію appendElem, яка першим параметром прийматиме посилання на DOM-об'єкт, у якому лежить тег ul, а другим - текст. Зробіть так, щоб ця функція створювала нову li з переданим текстом і додавала її в кінець переданого тега ul.

function appendElem(container, text) {
    const ul = container.querySelector('ul'); // знаходимо ul усередині переданого елемента
    const li = document.createElement('li');  // створюємо новий li
    li.textContent = text;                    // додаємо текст
    ul.appendChild(li);                       // додаємо li в кінець ul
}

// Застосуємо для кожного .elem
const elems = document.querySelectorAll('.elem');
elems.forEach(elem => appendElem(elem, '!'));
