// Дано такий код: Вкажіть на недоліки цього коду. Виправте їх.

let img = document.querySelector('#image');
if (img) {
    console.log('Image source:', img.src);
    console.log('Image width:', img.width);
    console.log('Image height:', img.height);
} else {
    console.error('Image with id "img" not found.');
}
