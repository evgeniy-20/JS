// Дано див і кнопку. За кліком на кнопку додайте діву ширину, висоту і межу.
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.style.width = '300px';
    elem.style.height = '300px';
    elem.style.border = '1px solid black';
})
