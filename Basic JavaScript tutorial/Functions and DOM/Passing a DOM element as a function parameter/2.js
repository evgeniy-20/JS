// Дано абзаци. Отримайте їх, переберіть циклом і кожному додайте в кінець '!' за допомогою функції appendText, зробленої в попередній задачі.

function appendText(elem, text) {
    elem.textContent += text;
}
let elems = document.querySelectorAll('p');
for (let elem of elems) {
    appendText(elem, '!');
}
