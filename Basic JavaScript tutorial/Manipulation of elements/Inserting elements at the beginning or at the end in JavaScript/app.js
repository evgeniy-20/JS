// Вставте елемент елемент з текстом 'start', а в кінець - елемент з текстом 'finish'.

let elem = document.querySelector('#elem');
let start = document.createElement('li');
start.textContent = 'start';
elem.prepend(start); // вставка на початок

let finish = document.createElement('li');
finish.textContent = 'finish';
elem.append(finish);
