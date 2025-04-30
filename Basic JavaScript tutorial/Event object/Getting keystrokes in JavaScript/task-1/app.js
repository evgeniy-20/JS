// Зробіть інпут, який буде по введенню виводити значення введених клавіш і їхні коди.

let input = document.querySelector('input');
input.addEventListener('keypress', function (event) {
    console.log(event.key);
    console.log(event.code);
})
