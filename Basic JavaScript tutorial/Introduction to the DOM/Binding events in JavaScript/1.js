// Дано посилання та кнопка. Натиснувши кнопку, додайте до кінця тексту посилання вміст її атрибута hrefв круглих дужках. Зробіть так, щоб це додавання відбувалося лише за першим натисканням.

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', func);

function func() {
    link.textContent += ` (${link.getAttribute('href')})`
    this.removeEventListener('click', func);
}
