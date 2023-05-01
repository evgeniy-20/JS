//Дан див. Запустіть цикл, який додасть до нашого див 5 інпутів. Нехай дано також абзац. Зробіть так, щоб кожен із нових інпутів за втратою фокусу записував свій текст до абзацу.

let parent = document.querySelector('.parent');
let text = document.querySelector('#text');

for(let i = 0; i <= 5; i++) {
    let input = document.createElement('input');
    input.addEventListener('blur', function () {
        input.innerHTML += text;
    })

    parent.appendChild(input);
}