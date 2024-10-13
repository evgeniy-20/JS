// Даний елемент: Вставте на початок абзац із текстом '!!!'.

let p = document.createElement('p');
p.textContent = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('afterbegin', p);
