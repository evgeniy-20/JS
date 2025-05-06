// Зробіть кнопку, після натискання на яку в консоль виводитиметься зворотний відлік, починаючи зі 100.

let button = document.querySelector('button');
button.addEventListener('click', function () {
    let countDown = 100;
    setInterval(() => {
        console.log(countDown--)
    }, 1000);
})
