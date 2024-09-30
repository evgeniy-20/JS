// Дан див з текстом і кнопки. За кліком на кнопку встановіть диву розмір шрифту в 20px, а також верхню межу та фон.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.style.fontSize = '20px';
    elem.style.borderTop = '2px solid black';
    elem.style.backgroundColor = 'lightblue';
})
