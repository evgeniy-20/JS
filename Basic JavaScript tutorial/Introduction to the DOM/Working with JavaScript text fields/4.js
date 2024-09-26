// Дано два інпута та кнопку. Після натискання на кнопку запишіть у перший інпут значення другого інпута, а в другий інпут - значення першого. Ваш код має працювати універсально, для будь-яких значень інпутів.
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
});
