// Поміняйте місцями текст його сусіда згори та текст його сусіда знизу.

let elem = document.querySelector('#elem');
let previousSibling = elem.previousElementSibling;
let nextSibling = elem.nextElementSibling;

if (previousSibling && nextSibling) {

    let previousText = previousSibling.textContent;
    let nextText = nextSibling.textContent;

    previousSibling.textContent = nextText;
    nextSibling.textContent = previousText;
}
