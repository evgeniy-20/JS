//Зробіть так, щоб будь-яка liвіддалялася на кліку на неї.

let elems = document.querySelectorAll('li');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		elem.remove();
	});
}

//