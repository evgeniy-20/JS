// Даний елемент: Вставте після нього абзац із текстом '!!!'.

let p = document.createElement('p');
p.textContent = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('afterend', p);
