//Вставте елемент елемент з текстом 'start', а в кінець - елемент з текстом 'finish'.

let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = ('finish');
li.innerHTML = ('start');
elem.append(li);
elem.prepend(li);

//Вставте елемент із текстом перед цим елементом 'new'.