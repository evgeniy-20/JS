// Знайдіть найближчого батька цього елемента, який є елементом із класом www.

let elem = document.querySelector('.www');
let parent = elem.parentElement;
let parentClass = parent.classList.closest('www');
console.log(parentClass);
