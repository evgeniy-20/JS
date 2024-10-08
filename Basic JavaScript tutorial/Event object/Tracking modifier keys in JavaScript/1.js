// Даний елемент. Зробіть так, щоб на кліку на нього він фарбувався в червоний колір, але тільки якщо в момент кліка натиснута клавіша Alt.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    if (event.altKey) {
        elem.style.color = 'red';
    }
})
