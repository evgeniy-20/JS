// Поясніть, у чому помилка в такому коді:

let elem = document.querySelector('div');
let currentSize = window.getComputedStyle(elem).fontSize;
let newSize = parseInt(currentSize) + 2;
elem.style.fontSize = newSize + 'px';
