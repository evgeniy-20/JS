// Даний абзац та кнопка. По кліку на кнопку прочитайте текст абзацу та виведіть його в консоль.

let submit = document.querySelector('#submit');
let name = document.querySelector('#name');
submit.addEventListener('click', function() {
    console.log(name.textContent);
})

//Даний абзац та кнопка. Натисніть кнопку, щоб записати в абзац новий текст.

let submit1 = document.querySelector('#submit1');
let name1 = document.querySelector('#name1');
submit1.addEventListener('click', function() {
    name1.textContent = 'Anna';
})

// Дано два абзаци, що містять своїм текстом якісь числа, і кнопка. Після натискання на кнопку виведіть на екран суму чисел, що зберігаються.

let sum = document.querySelector('#sum');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
sum.addEventListener('click', function() {
    sum.textContent = Number(num1) + Number(num2);
    console.log(sum.textContent);
})