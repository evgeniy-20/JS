// Деякий програміст написав код, який за натисканням кнопки запускає таймер, що виводить в консоль поточний момент часу: Після запуску коду виявилося, що кнопка зупинки не працює. Виправте помилку автора коду.

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
    timerId = setInterval(function () {
        let date = new Date;
        console.log(date.getMinutes() + ' ' + date.getSeconds());
    }, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(timerId);
});
