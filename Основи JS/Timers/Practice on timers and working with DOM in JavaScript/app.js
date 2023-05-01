let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000);

//Нехай в інпуті в атрибуті value спочатку записано число 10. Запустіть таймер, який кожну секунду зменшуватиме це число на одиницю.

let elem1 = document.querySelector('#elem1');

setInterval(function() {
	elem1.value = Number(elem1.value) - 1;
}, 1000);

//Модифікуйте попереднє завдання так, щоб, як тільки вміст інпуту дорівнюватиме нулю, таймер припинив свою роботу.