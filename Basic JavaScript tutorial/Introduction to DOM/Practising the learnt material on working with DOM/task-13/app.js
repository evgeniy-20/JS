// Дано посилання. Якщо посилання починається з http://, то додайте йому в кінець стрілку → (робиться так: &rarrr;).

let link = document.querySelector('a');
link.addEventListener('click', function (event) {
    let href = link.getAttribute('href');
    if (href.startsWith('http://')) {
        link.setAttribute('href', href + '&rarr;');
        link.textContent = link.textContent + ' →';
    }
});
