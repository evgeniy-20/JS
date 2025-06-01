// Прокрутіть елемент до кінця. Натисніть на кнопку, щоб вивелася величина повного прокручування.

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top')
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    topText.innerHTML = 'T: ' + elem.scrollTop + 'px';
})
scrollToEndBtn.addEventListener('click', function () {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
});
