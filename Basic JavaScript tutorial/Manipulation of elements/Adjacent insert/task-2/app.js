// Вставте після нього абзац із текстом '!!!'.

let elem = document.querySelector('#elem');
let newElem = document.createElement('p');
newElem.textContent = '!!!';
elem.insertAdjacentElement('afterend', newElem);
