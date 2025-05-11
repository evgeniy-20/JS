// Дано тег ul. Додайте в кінець кожного тега li посилання на видалення цього li зі списку.

let list = document.querySelectorAll('ul li');
for (let elem of list) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.innerHTML = 'remove';
    elem.appendChild(remove);
    remove.addEventListener('click', function (event) {
        elem.remove();
        event.preventDefault();
    })
}
