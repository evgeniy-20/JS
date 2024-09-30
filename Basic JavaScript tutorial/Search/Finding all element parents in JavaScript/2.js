// Знайдіть найближчого батька цього елемента, який є елементом класу www.

let elem = document.querySelector('#elem');
let closestArticle = elem.closest('.www');
console.log(closestArticle);
