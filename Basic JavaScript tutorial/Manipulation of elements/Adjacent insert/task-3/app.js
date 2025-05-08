// Вставте йому на початок абзац із текстом '!!!'.

let elem = document.querySelector('#elem');
let newElem = document.createElement('p');
newElem.textContent = '!!!';
elem.insertAdjacentElement('afterbegin', newElem);
