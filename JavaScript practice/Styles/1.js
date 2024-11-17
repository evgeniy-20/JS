// Створіть кнопку, при натисканні на яку змінюється колір тексту певного елемента (наприклад, заголовка) на червоний.

let elem = document.querySelector('#elem');
let onClick = document.querySelector('#onClick');
onClick.addEventListener('click', function () {
    elem.style.color = 'red';
});
