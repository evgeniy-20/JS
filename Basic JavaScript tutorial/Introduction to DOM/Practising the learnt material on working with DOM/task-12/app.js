// Дано посилання. Додайте в кінець кожного посилання його href у круглих дужках.
let links = document.querySelectorAll('a');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // щоб не переходити за посиланням
        let href = link.getAttribute('href');
        let text = link.innerText;
        link.innerText = text + ' (' + href + ')';
    });
});
