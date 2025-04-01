// Нехай у вас є посилання і кнопка. Після натискання на кнопку додайте в кінець тексту посилання вміст її атрибута href у круглих дужках.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.textContent += '(elem.href)';
})
