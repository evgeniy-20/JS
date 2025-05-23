// Дано див: Дана також кнопка. За кліком на кнопку збільште ширину і висоту діва на 10%.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    const style = getComputedStyle(elem);
    const currentWidth = parseFloat(style.width);
    const currentHeight = parseFloat(style.height);

    const newWidth = currentWidth * 1.1;
    const newHeight = currentHeight * 1.1;

    elem.style.width = newWidth + 'px';
    elem.style.height = newHeight + 'px';
});
