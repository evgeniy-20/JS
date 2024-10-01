// Даний чекбокс та кнопка. Зробіть так, щоб кожен клік по кнопці призводив до зміни стану чекбоксу.

let checkBox = document.querySelector('#myCheckBox');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    checkBox.disabled = !checkBox.disabled;
})
