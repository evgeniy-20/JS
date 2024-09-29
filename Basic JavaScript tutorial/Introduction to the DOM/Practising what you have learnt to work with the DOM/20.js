// Дано інпут і кнопку. Користувач вводить в інпут якийсь рядок. Після натискання на кнопку перемішайте введені символи випадковим чином і запишіть його назад в інпут.

function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

document.querySelector('#shuffleButton').addEventListener('click', function () {
    const input = document.querySelector('#inputString');
    const shuffledString = shuffleString(input.value);
    input.value = shuffledString;
});
