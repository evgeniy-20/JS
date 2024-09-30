// Даний список ul та кнопка. По кліку на кнопку додайте тегам li властивість float у значенні left.
let listItems = document.querySelectorAll('ul li');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    listItems.forEach(item => {
        item.style.cssFloat = 'left';
    });
})
