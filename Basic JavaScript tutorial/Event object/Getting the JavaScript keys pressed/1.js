// Зробіть інпут, який буде по введенню виводити значення введених клавіш і їхні коди.

let keyInput = document.querySelector('#keyInput');
let output = document.querySelector('#otput');
keyInput.addEventListener('keydown', function (event) {
    output.textContent = `Натиснуто клавішу: ${event.key}, Код клавіші: ${event.code}`;
});
