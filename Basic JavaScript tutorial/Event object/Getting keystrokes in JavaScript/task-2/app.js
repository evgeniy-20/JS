// Понатискайте в інпутері різні клавіші й подивіться, які в них значення та коди.

let input = document.querySelector('input');
input.addEventListener('keypress', function (event) {
    console.log(event.key);
    console.log(event.code);
})
