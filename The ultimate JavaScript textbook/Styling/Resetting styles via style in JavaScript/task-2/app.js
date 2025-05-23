// Дано дів і дві кнопки. За кліком на першу кнопку пофарбуйте колір діва в червоний колір, а за кліком на другу - поверніть початковий колір.

let elem = document.querySelector('.elem');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', function () {
    elem.style.backgroundColor = 'red';
})
btn2.addEventListener('click', function () {
    elem.style.backgroundColor = '';
})
