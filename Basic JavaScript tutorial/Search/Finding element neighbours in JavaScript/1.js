// Знайдіть його сусіда зверху і додайте йому текст текст '!'.

let elem = document.querySelector('#elem');
let previousSibling = elem.previousElementSibling;
if (previousSibling) {
    previousSibling.textContent += '!';
}
