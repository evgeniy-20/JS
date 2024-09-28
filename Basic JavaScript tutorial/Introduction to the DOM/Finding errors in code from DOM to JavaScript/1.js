// Код повинен додати текст до кінця абзацу:

let elems = document.querySelectorAll('p');
for (let elem of elems) {
    elem.textContent += '!';
}
