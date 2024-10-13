// Даний елемент: Вставте в кінець абзац із текстом '!!!'.
let elem = document.querySelector('#elem');
let p = document.createElement('p');
p.textContent = '!!!';
elem.insertAdjacentElement('beforeend', p);
