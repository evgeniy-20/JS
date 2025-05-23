// Дано див і кнопку. При натисканні на кнопку задайте діву ширину в 400px, а висоту в 300px.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.style.width = '400px';
    elem.style.height = '300px';
})
