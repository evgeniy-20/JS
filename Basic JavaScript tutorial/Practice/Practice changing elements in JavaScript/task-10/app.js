// Є елемент <p id="text">Зроби мене червоним</p>. При натисканні на кнопку — зміни колір тексту на червоний.

let elem = document.querySelector('#text');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.style.color = 'red';
});
