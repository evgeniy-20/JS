// По кліку на кнопку в див повинно записатися або одне, або інше значення:

let checkbox = document.querySelector('input[type="checkbox"]');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function () {
    if (checkbox.checked) {
        div.textContent = '111';
    } else {
        div.textContent = '222';
    }
});
