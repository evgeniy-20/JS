//Даний елемент: Отримайте значення його атрибута value.

let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);

//Даний елемент: Отримайте значення його атрибута class.

let elem1 = document.querySelector('#elem1');
let class1 = elem1.getAttribute('class');
console.log(class1);

//Даний елемент: <input id="elem"> Встановіть його атрибут value у значення 'text'

let elem2 = document.querySelector('#elem2');
elem2.setAttribute('value', 'text')

//Даний елемент: <input id="elem"> Встановіть атрибут class у значення 'valid'.

let elem3 = document.querySelector('#elem3');
elem3.setAttribute('class', 'valid');

//Даний елемент: <input id="elem" value="text"> Видаліть атрибут value.

let elem4 = document.querySelector('#elem4');
elem4.removeAttribute ('value');

//Даний елемент: <input id="elem" value="text"> Перевірте наявність у нього атрибута value.

let elem5 = document.querySelector('#elem5');
console.log(elem5.hasAttribute('value'));