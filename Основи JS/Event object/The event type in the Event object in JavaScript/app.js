//Допишіть код функції funcтак, щоб при натисканні на елемент цей елемент фарбувався в зелений колір, а при подвійному натисканні - на червоний.

let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	event.type = 'green';
    event.type = 'red';
}