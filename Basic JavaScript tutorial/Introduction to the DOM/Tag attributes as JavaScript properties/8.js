// Нехай у вас є дві картинки. Зробіть на сторінці тег img і дві кнопки. При натисканні на першу кнопку запишіть в атрибут src шлях до першої картинки, а при натисканні на другу - шлях до другої картинки.

let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let submit1 = document.querySelector('#submit1');
let submit2 = document.querySelector('#submit2');
submit1.addEventListener('click', function () {
    img1.src = 'path/to/first-image.jpg';
});

submit2.addEventListener('click', function () {
    img2.src = 'path/to/second-image.jpg';
});
