// Дано інпут і кнопку. Користувач вводить в інпут якийсь рядок. Після натискання на кнопку перемішайте введені символи випадковим чином і запишіть його назад в інпут.

let input = document.querySelector('#textInput');
let button = document.querySelector('#shuffleBtn');

button.addEventListener('click', () => {
    let text = input.value;
    let chars = text.split('');

    for (let i = chars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    input.value = chars.join('');
});
