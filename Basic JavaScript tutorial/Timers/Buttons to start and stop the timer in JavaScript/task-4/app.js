// Деякий програміст написав код, який після натискання на кнопку запускає таймер, що виводить у консоль поточний момент часу: Після запуску коду, однак, виявилося, що кнопка зупинки не працює. Виправте помилку автора коду.
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId = null;

start.addEventListener('click', function () {
    if (timerId === null) {
        setInterval(function () {
            let date = new Date;
            console.log(date.getMinutes() + ' ' + date.getSeconds());
        }, 1000);
    }
});

stop.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});
