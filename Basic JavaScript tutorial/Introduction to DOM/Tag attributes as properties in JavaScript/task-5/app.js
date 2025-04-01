// Нехай у вас є картинка. Розмістіть її на сторінці за допомогою тега img. Нехай дані також кнопка й абзац. Зробіть так, щоб за кліком на кнопку в абзац записався шлях до картинки з її атрибута src.

let elem = document.querySelector('#elem');
let img = document.querySelector('#img');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.innerHTML = img.src;
})
