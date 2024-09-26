// Нехай у вас є картинка. Розмістіть її на сторінці за допомогою тега img. Нехай дані також кнопка і абзац. Зробіть так, щоб по кліку на кнопку в абзац записався шлях до зображення з її атрибута src.

let img = document.querySelector('#img');
let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    elem.textContent = img.src;
})
