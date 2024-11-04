// Зробіть функцію appendElem, яка першим параметром прийматиме посилання на DOM-об'єкт, у якому лежить тег ul, а другим - текст. Зробіть так, щоб ця функція створювала нову li з переданим текстом і додавала її в кінець переданого тега ul.

function appendElem(ulElement, text) {
    let li = document.createElement('li');
    li.textContent = text;
    ulElement.appamdChild(li);
}
const ulElement = document.querySelector('ul');
appendElem(ulElement, 'Новий елемент списку');
