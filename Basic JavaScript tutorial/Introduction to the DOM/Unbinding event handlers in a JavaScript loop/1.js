// Дано абзаци. Після натискання на будь-який з абзаців додайте йому в кінець знак оклику. Зробіть так, щоб це додавання відбувалося лише за першим натисканням.

let elems = document.querySelectorAll('#www');

for (let elem of elems) {
    elem.addEventListener('click', func);
}

function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
}
