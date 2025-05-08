// Вставте перед цим елементом елемент із текстом 'new'.

let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let newElement = document.createElement('li');
newElement.textContent = 'new';

parent.insertBefore(newElement, elem);
