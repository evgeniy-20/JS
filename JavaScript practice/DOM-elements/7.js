// Знайди всі зображення на сторінці та змінити їх атрибут src на "newImage.jpg".

document.querySelectorAll("img").forEach((img) => {
    img.src = "newImage.jpg";
});
