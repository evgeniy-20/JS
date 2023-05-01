//Дане посилання. Натиснувши на це посилання, додайте в кінець її тексту вміст її атрибута hrefв круглих дужках. Зробіть так, щоб це додавання відбувалося лише за першим натисканням.

let link = document.querySelector('#link');
link.addEventListener('click', func);

function func() {
	this.textCo = 
	this.removeEventListener('click', func);
}