// Знайдіть його сусіда знизу і додайте йому в кінець текст '!!'.

let elem = document.querySelector('#elem');
let nextElem = elem.nextElementSibling;
nextElem.textContent += '!!';
