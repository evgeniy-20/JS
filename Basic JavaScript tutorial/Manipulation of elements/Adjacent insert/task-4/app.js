// Вставте йому в кінець абзац із текстом '!!!'.

let elem = document.querySelector('#elem');
let newElem = document.createElement('p');
newElem.textContent = '!!!';
elem.insertAdjacentElement('beforeend', newElem);
