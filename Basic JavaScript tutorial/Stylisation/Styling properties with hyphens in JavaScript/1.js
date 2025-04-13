// Дано див із текстом і кнопку. За кліком на кнопку встановіть діву розмір шрифту в 20px, а також верхню межу і фон.

let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    elem.style.fontSize = '20px';
    elem.style.borderTop = '2px solid black';
    elem.style.backgroundColor = 'yellow';
})
