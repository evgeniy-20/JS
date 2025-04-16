// Дано чекбокс і кнопку. Зробіть так, щоб кожен клік по кнопці призводив до зміни стану чекбокса.
let checkbox = document.querySelector('#checkbox');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    checkbox.disabled = !checkbox.disabled;
})
