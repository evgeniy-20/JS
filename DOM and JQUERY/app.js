let title = document.getElementById('title');
let button = document.getElementById('button');
let stop = document.getElementById('stop');
let message = document.getElementById('message');
let intervalId;

button.addEventListener('click', function () {

    intervalId = setInterval(function () {
        message.innerHTML += 'Женя-МОЛОДЕЦЬ!!!';
    }, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(intervalId);
})
