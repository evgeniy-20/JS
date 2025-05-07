// Дано абзац і дві кнопки. Зробіть так, щоб після натискання на першу кнопку в абзаці почав цокати таймер від 1 до нескінченності, а після натискання на другу таймер зупинявся.

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let paragraph = document.querySelector('#paragraph');
let timerId = null;

start.addEventListener('click', function () {
    if (timerId === null) {
        let count = 0;
        timerId = setInterval(function () {
            count++;
            paragraph.innerHTML = count;
        }, 1000);
    }
})

stop.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        paragraph.innerHTML = 'Timer stopped';
    }
})
