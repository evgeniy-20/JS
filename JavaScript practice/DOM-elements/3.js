// Додай обробник події до кнопки з ID "btn" так, щоб при натисканні на неї змінювався текст у елементі з класом "output" на "Button was clicked!".

let output = document.querySelector('.output');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    output.textContent = "Button was clicked!";
})
