// Дано абзаци. Отримайте їх, переберіть циклом і кожному додайте в кінець '!' за допомогою функції appendText, зробленої в попередній задачі.

function appendText(elem, text) {
    elem.textContent += text;
}

let elem1 = document.getElementsByClassName('elem1')[0];
appendText(elem1, '!');
let elem2 = document.getElementsByClassName('elem2')[0];
appendText(elem2, '!');
