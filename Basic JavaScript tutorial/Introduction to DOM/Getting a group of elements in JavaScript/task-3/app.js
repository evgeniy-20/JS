// Дано інпути з числами, абзац і кнопку. Після натискання на кнопку знайдіть суму чисел з інпутів і запишіть цю суму в текст абзацу.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let sum = Number(num1.value) + Number(num2.value);
    result.textContent += sum;
})
