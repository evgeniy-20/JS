// Дано абзаци з числами. Зробіть так, щоб за кліком на будь-який абзац його число в ньому зводилося в квадрат.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
num1.addEventListener('click', func);
num2.addEventListener('click', func);
function func() {
    this.textContent = Math.pow(Number(this.textContent), 2);
}
