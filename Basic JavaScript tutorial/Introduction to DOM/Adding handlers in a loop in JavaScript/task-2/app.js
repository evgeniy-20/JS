// Дано абзаци з числами. Зробіть так, щоб за кліком на будь-який абзац його число в ньому зводилося в квадрат.

let paragraph = document.querySelectorAll('p');
function funk() {
    this.textContent = Math.pow(Number(this.textContent), 2);
}
for (let elem of paragraph) {
    elem.addEventListener('click', funk);
}
