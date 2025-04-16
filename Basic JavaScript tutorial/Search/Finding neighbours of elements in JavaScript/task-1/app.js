// Знайдіть його сусіда зверху і додайте йому в кінець текст '!!'.

let elem = document.querySelector('#elem');
let prevElem = elem.previousElementSibling;
prevElem.textContent += '!!';
