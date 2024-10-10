// Нехай тепер в одній і другій функції ми виводитимемо valueінпута. Визначте, що виведеться у рядках коду, зазначених коментарями:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет?
	
	function child() {
		console.log(this.value); // что выведет?
	}
	child();
}
