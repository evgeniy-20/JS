// Отримайте scrollHeight елемента і відніміть від нього величину повної прокрутки (з попереднього завдання). Яке значення вийде? Які розміри воно містить у собі?

let elem = document.querySelector('.elem');
let topText = document.querySelector('.top');
let button = document.querySelector('.button');
let scrollToEndBtn = document.querySelector('.scrollToEnd'); // ← додано

button.addEventListener('click', function () {
    topText.innerHTML = 'T: ' + elem.scrollTop + 'px';
});

scrollToEndBtn.addEventListener('click', function () {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
});
