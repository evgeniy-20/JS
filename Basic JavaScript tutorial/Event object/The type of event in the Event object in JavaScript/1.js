// У наступному коді до двох подій прив'язаний той самий обробник: Допишіть код функції funcтак, щоб при натисканні на елемент цей елемент фарбувався в зелений колір, а при подвійному натисканні - на червоний.

let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    if (event.type === 'click') {
        elem.style.color = 'green';
    } else if (event.type === 'dblclick') {
        elem.style.color = 'red';
    }
}
