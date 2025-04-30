// Дано два інпути, абзац і посилання. Нехай в інпути вводяться числа. Зробіть так, щоб за кліком на посилання в абзац записалася сума введених чисел.

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let paragraph = document.querySelector('#result');
let link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault(); // щоб посилання не перезавантажувало сторінку
    let sum = Number(input1.value) + Number(input2.value);
    paragraph.textContent += sum;
});
