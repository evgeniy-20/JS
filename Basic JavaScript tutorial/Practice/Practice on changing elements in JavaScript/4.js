// Створіть кнопку з текстом "Змінити текст". При натисканні на цю кнопку змінюйте текст в абзаці під кнопкою на "Текст змінено!".

let change = document.querySelector('#change');
let elem = document.querySelector('#elem');
change.addEventListener('click', function () {
    elem.innerHTML = "Текст змінено!";
});
