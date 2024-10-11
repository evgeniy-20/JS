// Зробіть кнопку, натиснувши яку в консоль буде виводиться зворотний відлік, починаючи з 100.

let start = document.querySelector('#start');
start.addEventListener('click', function () {
    let i = 100;
    setInterval(function () {
        console.log(--i);
    }, 1000);
})
