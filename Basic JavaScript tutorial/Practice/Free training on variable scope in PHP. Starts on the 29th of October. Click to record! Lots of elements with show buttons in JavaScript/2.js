// Вивчіть моє рішення, а потім самостійно, не підглядаючи в мій код, розв'яжіть цю задачу.

let buttons = document.querySelectorAll('button');
let elem = document.querySelectorAll('p');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        elem[i].classList.toggle('hidden');
    })
}
