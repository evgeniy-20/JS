//Зробіть інпут, який по вводу виводитиме значення введених клавіш та їх коди.

let elem = document.querySelector('input');

elem.addEventListener('keypress', function(event) {
	console.log(event.code);
});