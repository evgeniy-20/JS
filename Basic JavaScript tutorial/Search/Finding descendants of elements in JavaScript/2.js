// Даний елемент #elem: Знайдіть останнього нащадка цього елемента та зробіть його текст червоного кольору.
let elem = document.querySelector('#elem');
let lastElementChild = elem.lastElementChild;
lastElementChild.style.color = 'red';
