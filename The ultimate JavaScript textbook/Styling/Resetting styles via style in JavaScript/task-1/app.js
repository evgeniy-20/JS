// Дано див і дві кнопки. За кліком на першу кнопку сховайте див, а за кліком на другу - покажіть

let elem = document.querySelector('.elem');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', function () {
    elem.style.display = 'none';
})
btn2.addEventListener('click', function () {
    elem.style.display = '';
})
