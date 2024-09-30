// Знайдіть його сусіда знизу його сусіда знизу (наступний елемент за сусіднім) і додайте йому текст текст '!'.
let elem = document.querySelector('#elem');
let nextSibling = elem.nextElementSibling;
let nextSibling1 = nextSibling.nextElementSibling;
if (nextSibling1) {
    nextSibling1.textContent += '!';
}
