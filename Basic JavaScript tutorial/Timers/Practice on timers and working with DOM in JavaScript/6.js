// Даний абзац та дві кнопки. Зробіть так, щоб після натискання на першу кнопку в абзаці почав тикати таймер від 1до нескінченності, а після натискання на другу таймер зупинявся.
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let elem = document.querySelector('#elem');
let timerId;
let num = 0;
start.addEventListener('click', function () {
    if (!timerId) {
        timerId = setInterval(function () {
            num++;
            elem.innerText = num;
        }, 1000);
    };
})
stop.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
})
