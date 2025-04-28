// Дано список, що випадає, і кнопку. За кліком на кнопку зробіть позначеним останній пункт списку.

let select = document.querySelector('#select');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let options = select.options;
    options[options.lengh - 1].selected = true;
})
