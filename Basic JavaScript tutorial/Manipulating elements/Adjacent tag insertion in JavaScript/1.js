// Даний елемент: Даний елемент. Вставте перед ним наступний тег: <div class="www"><p>text</p><p>text</p><input></div>

let elem = document.querySelector('#elem');
let div = document.createElement('div')
div.classList.add('www');
div.innerHTML = '<p>text</p><p>text</p><input>';
elem.insertAdjacentElement('beforebegin', div);
