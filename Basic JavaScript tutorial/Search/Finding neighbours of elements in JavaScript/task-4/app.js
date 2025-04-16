// Поміняйте місцями текст сусіда зверху і текст сусіда знизу.

let elem = document.querySelector('#elem');
let prevElem = elem.previousElementSibling;
let nextElem = elem.nextElementSibling;
let prevText = prevElem.innerHTML;
let nextText = nextElem.innerHTML;
prevElem.innerHTML = nextText;
nextElem.innerHTML = prevText;
