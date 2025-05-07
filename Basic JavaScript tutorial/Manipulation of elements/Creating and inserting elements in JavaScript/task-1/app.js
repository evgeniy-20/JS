// Вставте йому в кінець li з текстом 'item'.

let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
elem.appendChild(li);
