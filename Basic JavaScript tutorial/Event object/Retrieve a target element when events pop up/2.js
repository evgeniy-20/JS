// Модифікуйте попереднє завдання. Зробіть так, щоб при кліку на li, їй в кінець додавався знак оклику, а при кліку на ulв консоль виводилася інформація про це.

let div = document.querySelector('div');

div.addEventListener('click', function (event) {
    if (event.target.matches('div')) {
        console.log('клик саме по div');
    }
    if (event.target.matches('UL')) {
        console.log('клик саме по ul');
    }
    if (event.target.matches('LI')) {
        links.textContext += '!';
    }
});
