// Даний елемент #elem: Знайдіть першого нащадка цього елемента та зробіть його текст червоного кольору.

let elem = document.querySelector('#elem');
let firstElementChild = elem.firstElementChild;
firstElementChild.style.color = 'red';
