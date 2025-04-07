// Дано абзаци. При натисканні на будь-який з абзаців додайте йому в кінець знак оклику. Зробіть так, щоб це додавання відбувалося лише за першим натисканням.

let paragraph = document.querySelectorAll('p');
for (let elem of paragraph) {
    elem.addEventListener('click', func);
}
function func() {
    this.innerHTML += '!';
    this.removeEventListener('click', func);
}
