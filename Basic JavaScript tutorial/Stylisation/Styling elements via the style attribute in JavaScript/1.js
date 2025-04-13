// Дано див і кнопку. За кліком на кнопку додайте діву ширину, висоту і межу.

let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    elem.style.width = '200px';
    elem.style.height = '200px';
    elem.style.border = '1px solid black';
})
