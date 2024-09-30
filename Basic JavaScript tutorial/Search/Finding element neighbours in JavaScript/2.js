// Знайдіть його сусіда знизу і додайте йому текст текст '!'.

let elem = document.querySelector('#elem');
let nextSibling = elem.nextElementSibling;
if (nextSibling) {
    nextSibling.textContent += '!';
}
