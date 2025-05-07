// Дано інпут, кнопку й абзац. В інпут вводиться якесь число. Після натискання на кнопку запишіть введене число в текст абзацу і запустіть зворотний відлік в абзаці: нехай щосекунди число в абзаці зменшується на одиницю, поки не дійде до нуля.

let number = document.querySelector('#number');
let paragraph = document.querySelector('#result');
let button = document.querySelector('#click')
let timerId = null;
button.addEventListener('click', function () {
    let value = Number(number.value);
    if (value >= 0) {
        paragraph.innerHTML = value;
        timerId = setInterval(function () {
            value--;
            paragraph.innerHTML = value;
            if (value <= 0) {
                clearInterval(timerId);
                paragraph.innerHTML = 'Countdown finished';
            }
        }, 1000);
    }
})
