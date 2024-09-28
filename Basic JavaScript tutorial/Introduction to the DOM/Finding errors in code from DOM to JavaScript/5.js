// По кліку на абзац йому до кінця повинен додатись заданий текст:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function () {
        this.textContent += '!';
    });
}
