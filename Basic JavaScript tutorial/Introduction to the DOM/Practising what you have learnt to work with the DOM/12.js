// Дано посилання. Додайте в кінець кожного посилання його href у круглих дужках.

let links = document.querySelectorAll('a');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    links.forEach(function (link) {
        link.textContent += ` (${link.href})`;
    });
});
