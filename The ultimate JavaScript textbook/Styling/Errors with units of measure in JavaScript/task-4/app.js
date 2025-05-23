// Дано див: Дана також кнопка.При натисканні на кнопку збільште ширину і висоту дива на 50px.

let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    const style = getComputedStyle(elem);
    const currentWidth = parseFloat(style.width);
    const currentHeight = parseFloat(style.height);

    elem.style.width = (currentWidth + 50) + 'px';
    elem.style.height = (currentHeight + 50) + 'px';
})
