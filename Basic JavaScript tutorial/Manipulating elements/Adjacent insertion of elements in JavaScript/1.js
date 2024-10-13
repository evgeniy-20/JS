// Даний елемент: Вставте перед ним абзац із текстом '!!!'.

let p = document.createElement('p');
p.textContent = '!!!';

let elem = document.querySelector('#elem');
elem.insertAdjacentElement('beforebegin', p);
