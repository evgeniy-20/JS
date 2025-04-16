// Знайдіть його сусіда знизу його сусіда знизу (наступний елемент за сусіднім) і додайте йому в кінець текст '!'.

let elem = document.querySelector('#elem');
let nextElem = elem.nextElementSibling;
let nextNextElem = nextElem.nextElementSibling;
nextNextElem.textContent += '!';
