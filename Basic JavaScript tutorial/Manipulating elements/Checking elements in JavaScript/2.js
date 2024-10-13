// Даний елемент. Перевірте, чи цей елемент є абзацом.
let elem = document.querySelector('#elem');

let isParagraph = elem.tagName === 'P';
console.log(isParagraph);
