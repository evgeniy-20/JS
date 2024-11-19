// Напишіть скрипт, який додає клас highlight до елемента при наведенні курсору, а при відведенні курсору видаляє цей клас.

let elem = document.querySelector('#elem');
elem.addEventListener('mouseenter', function () {
    elem.classList.add('highlight');
});
elem.addEventListener('mouseleave', function () {
    elem.classList.remove('highlight');
});
