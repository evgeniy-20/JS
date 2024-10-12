// Дано інпут, кнопку й абзац. В інпут вводиться якесь число. Після натискання на кнопку запишіть введене число в текст абзацу і запустіть зворотний відлік в абзаці: нехай щосекунди число в абзаці зменшується на одиницю, поки не дійде до нуля.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
let start = document.querySelector('#start');
let timerId;
start.addEventListener('click', function () {
    clearInterval(timerId);
    let currrentValue = Number(elem.value);
    if (!isNaN(currrentValue) && currrentValue > 0) {
        timerId = setInterval(function () {
            result.textContent = currrentValue;
            currrentValue--;
            if (currrentValue < 0) {
                clearInterval(timerId);
            }
        }, 1000);
    };
})
