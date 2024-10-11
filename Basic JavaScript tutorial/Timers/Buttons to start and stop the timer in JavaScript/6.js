// Наведений мною в теоретичній частині код не враховує те, що кнопку старт можна зробити кілька натискань. Для виправлення цієї проблеми можна за натисканням на кнопку старт відв'язувати подію від цієї кнопки, а після натискання на кнопку стоп - прив'язувати назад. Виправте проблему.
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let timerId;

function startTimer() {
    timerId = setInterval(function () {
        console.log('!');
    }, 1000);

    // Відв'язуємо подію від кнопки start
    start.removeEventListener('click', startTimer);
}

start.addEventListener('click', startTimer);

stop.addEventListener('click', function () {
    clearInterval(timerId);

    // Прив'язуємо подію назад до кнопки start
    start.addEventListener('click', startTimer);
});
