// Наведений мною в теоретичній частині код не враховує те, що на кнопку старт можна зробити кілька натискань. Для виправлення цієї проблеми можна після натискання на кнопку старт відв'язувати подію від цієї кнопки, а після натискання на кнопку стоп - прив'язувати назад. Виправте проблему.

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId = null;

start.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(function () {
            let date = new Date;
            console.log(date.getMinutes() + ' ' + date.getSeconds());
        }, 1000);
    }
});

stop.addEventListener('click', function () {
    clearInterval();
    timerId = null;
});
