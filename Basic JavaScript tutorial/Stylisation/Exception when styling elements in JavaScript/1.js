// Дано список ul і кнопку. За кліком на кнопку додайте тегам li властивість float у значенні left.

let elem = document.querySelector('ul li');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    elem.style.cssFloat = 'left'
})
