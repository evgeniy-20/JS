// Знайдіть його батька і задайте йому червону межу.

let elem = document.querySelector('#elem');
let parent = elem.parentElement;
parent.style.border = '2px solid red';
