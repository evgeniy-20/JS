// Дан ul: Вставте елемент елемент з текстом 'start', а в кінець - елемент з текстом 'finish'.

let elem = document.querySelector('#elem');
let li1 = document.createElement('li');
li1.textContent = 'start';
let li2 = document.createElement('li');
li2.textContent = 'finish';

elem.append(li2);
elem.prepend(li1);
