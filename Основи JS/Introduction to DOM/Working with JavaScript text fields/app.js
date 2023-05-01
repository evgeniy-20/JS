//Даний інпут: <input id="elem" value="text">
//Зробіть кнопку, натиснувши яку виводитиме поточний текст інпуту. Після заходу на сторінку натисніть кнопку, щоб побачити поточний текст інпуту, потім поредагуйте текст в інпуті і ще раз натисніть кнопку. Переконайтеся, що виводиться новий текст інпуту.

let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function() {
    console.log(elem.value);
})

//Даний інпут та кнопка. Натиснувши кнопку, запишіть в інпут який-небудь текст.

let elem1 = document.querySelector('#elem1');
let submit1 = document.querySelector('#submit1');
submit1.addEventListener('click', function() {
    elem1.value = 'new';
})

//Даний інпут, абзац та кнопка. Натиснувши кнопку, запишіть в абзац текст з інпуту.

let elem2 = document.querySelector('#elem2');
let submit2 = document.querySelector('#submit2');
let text = document.querySelector('#text');
submit2.addEventListener('click', function() {
    text.innerHTML = elem2.value;
})

//Дано два інпути та кнопка. У перший інпут користувача вводиться число. Натиснувши кнопку, запишіть у другий інпут квадрат введеного числа.

let num1 = document.querySelector('#num1');
let submit3 = document.querySelector('#submit3');
let num2 = document.querySelector('#num2');
num1.addEventListener('focus', function() {
    this.value = null;
}, false);
submit3.addEventListener('click', function() {
    if(isNaN(parseInt(num1.value))) {
        alert('Введено не число');
    } else {
        num2.value = Math.pow(parseInt(num1.value), 2);
        num1.value = null;
    }
});

//Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

let text1 = document.querySelector('#text1');
let submit4 = document.querySelector('#submit4');
let text2 = document.querySelector('#text2');
submit4.addEventListener('click', function() {
    text1.value = text2.value;
    text2.value = buff;
})

//Дані 5інпутів, абзац та кнопка. У інпут вводяться числа. Після натискання на кнопку запишіть середнє арифметичне введених чисел до абзацу.

let num = document.querySelector('#num');
let submit5 = document.querySelector('#submit5');
let result = document.querySelector('#result');
let sum = 0;
submit5.addEventListener('click', function() {
    for(let i = 0; i < num.length - 1; i++) {
        sum = sum + Number(num[i].value);
    }
    result.value = sum;
})

