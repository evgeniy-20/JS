// Нехай у вас є дві картинки. Зробіть на сторінці тег img і дві кнопки. При натисканні на першу кнопку запишіть в атрибут src шлях до першої картинки, а при натисканні на другу - шлях до другої картинки.

let image = document.querySelector('#image');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function () {
    image.src = './images/photo_2024-09-25_18-54-32.jpg';
})

button2.addEventListener('click', function () {
    image.src = './images/photo_2024-10-02_21-36-10.jpg';
})
