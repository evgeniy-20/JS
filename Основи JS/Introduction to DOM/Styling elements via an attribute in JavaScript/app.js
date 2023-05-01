//Даний див і кнопка. По кліку на кнопку додайте диву ширину, висоту та межу.

let submit = document.querySelector('#submit');
let elem = document.querySelector('#elem');
submit.addEventListener('click', function() {
    elem.style.width = '300px';
    elem.style.height = '300px';
    elem.style.border = '1px solid black';
})

//Дан див з текстом і кнопки. За кліком на кнопку встановіть диву розмір шрифту в 20px, а також верхню межу та фон.

let submit1 = document.querySelector('#submit1');
let elem1 = document.querySelector('#elem1');
submit1.addEventListener('click', function() {
    elem1.style.fontSize = '20px';
    elem1.style.backgroundColor = 'orange';
    elem1.style.borderTop = '1px solid black';
})
