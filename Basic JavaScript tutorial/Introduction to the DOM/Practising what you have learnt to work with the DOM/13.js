// Дано посилання. Якщо посилання починається з http://, то додайте йому в кінець стрілку → (робиться так: &rarrr;).
let links = document.querySelectorAll('a');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    links.forEach(function (link) {
        if (link.href.startsWith('http://')) {
            link.innerHTML += ' &rarr;';
        }
    });
});
