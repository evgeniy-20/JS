//Зробіть функцію appendText, яка першим параметром прийматиме селектор, а другим - текст. Зробіть так, щоб ця функція додавала текст до кінця переданих елементів.

forEach('.elem', function(elem, index) {
	elem.textContent = elem.textContent + index;
});

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let i = 0; i < elems.length; i++) {
		func(elems[i], i);
	}
}