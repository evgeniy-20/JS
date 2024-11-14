// Видали останній елемент із списку, що має ID "todoList".

let elem = document.querySelector('#todoList');
let myList = document.querySelector('#myList');
let remove = document.querySelector('#remove');
remove.addEventListener('click', function () {
    let newList = document.createElement('li');
    newList.textContent = 'New element';
    myList.appendChild(newList);

    // Видаляємо останній елемент списку
    let lastElement = elem.lastElementChild;
    if (lastElement) {
        elem.removeChild(lastElement);
    }
});
