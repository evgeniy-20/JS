// Дано тег ul. Додайте в кінець кожного тега li посилання на видалення цього li зі списку.

let elems = document.querySelectorAll('#parent li');
for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';
    elem.appendChild(remove);
}
