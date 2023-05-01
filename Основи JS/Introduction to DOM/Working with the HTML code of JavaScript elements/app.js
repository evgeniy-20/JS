//Даний абзац та кнопка. По кліку на кнопку прочитайте HTML-код абзацу і виведіть його в консоль.

let p = document.querySelector('#p');
let submit = document.querySelector('#submit')
submit.addEventListener('click', function() {
    console.log(p.innerHTML);
})

// Даний абзац та кнопка. По кліку на кнопку запишіть новий текст в абзац так, щоб він був жирним.

let p1 = document.querySelector('#p1');
let submit1 = document.querySelector('#submit1')
submit1.addEventListener('click', function() {
    p1.textContent = `<b>Yevhen Prokopiv</b>`
})
