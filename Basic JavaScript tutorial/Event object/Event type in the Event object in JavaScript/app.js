// У наступному коді до двох подій прив'язаний один і той самий обробник: Допишіть код функції func так, щоб під час кліка на елемент цей елемент забарвлювався в зелений колір, а під час подвійного кліка - у червоний.

let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    if (event.type === 'click') {
        event.target.style.backgroundColor = 'green';
    } else if (event.type === 'dblclick') {
        event.target.style.backgroundColor = 'red';
    }
}
