// Знайдіть найближчого батька цього елемента, який є тегом div.

let element = document.querySelector('#elem');
let parentDiv = element.closest('div');
console.log(parentDiv);
