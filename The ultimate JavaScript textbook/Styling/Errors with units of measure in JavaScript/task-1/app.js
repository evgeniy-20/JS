// Поясніть, у чому помилка в такому коді:

let elem = document.querySelector('div');
let currentSize = window.getComputedStyle(elem).fontSize; // напр., "16px"
let newSize = parseFloat(currentSize) + 2; // 16 + 2 = 18
elem.style.fontSize = newSize + 'px'; // "18px"
