// Дано 5 абзаців із якимись текстами. За кліком на будь-який абзац запишіть у кінець його тексту знак оклику.

let paragraph = document.querySelectorAll('p');
paragraph.addEventListener('click', func)
function func() {
    this.textContent += '!';
}
