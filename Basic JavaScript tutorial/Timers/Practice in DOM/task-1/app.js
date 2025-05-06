// Дано кнопку. Дано абзац, текстом якого є число. Після натискання на кнопку запустіть таймер, який щосекунди збільшуватиме текст абзацу на 1.

let number = document.querySelector('#number');
let clickButton = document.querySelector('#click');
clickButton.addEventListener('click', function () {
    setInterval(() => {
        let numberValue = Number(number.textContent);
        numberValue++;
        number.textContent = numberValue;
    }, 1000);
})
