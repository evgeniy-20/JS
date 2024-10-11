// Ще один програміст також написав код для вирішення попереднього завдання: Після запуску коду знову виявилося, що кнопка зупинки не працює. Виправте помилку автора коду.

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
