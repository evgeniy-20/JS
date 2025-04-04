// Дано два інпута та кнопку. Після натискання на кнопку запишіть у перший інпут значення другого інпута, а в другий інпут - значення першого. Ваш код має працювати універсально, для будь-яких значень інпутів.

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let tamp = num1.value;
    num1.value = num2.value;
    num2.value = tamp;
})
