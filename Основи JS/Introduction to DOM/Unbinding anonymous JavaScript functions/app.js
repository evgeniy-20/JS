//Даний список ul, у кожному пункті якого записано число. Зробіть так, щоб на кліку на будь-яку li її кількість збільшувалося на одиницю.

let elems = document.querySelectorAll('ul');

for (let elem of elems) {
	elem.addEventListener('click', func = () => {
		this.textContent = parseInt(this.textContent) + 1;
		this.removeEventListener('click', func); // отвязываем функцию
	});
}

//Модифікуйте попередню задачу так, щоб кожна liзбільшувала своє значення лише за першим натисканням на неї.



//Модифікуйте попередню задачу так, щоб кожна liзбільшувала своє значення тільки якщо її значення менше 10.