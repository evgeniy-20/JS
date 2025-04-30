// Дано елемент. Зробіть так, щоб після кліка на нього він фарбувався в червоний колір, але тільки якщо в момент кліка натиснута клавіша Alt.

let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    if (event.altKey) {
        elem.style.color = 'red';
    }
});
