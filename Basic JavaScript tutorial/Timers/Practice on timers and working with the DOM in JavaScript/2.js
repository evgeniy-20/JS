// Модифікуйте попереднє завдання так, щоб, як тільки вміст інпуту дорівнюватиме нулю, таймер припинив свою роботу.

let elem = document.querySelector('#elem');
let timerId = setInterval(function () {
    if (Number(elem.value) > 0) {
        elem.value = Number(elem.value) - 1;
    } else {
        clearInterval(timerId);
    }
}, 1000);
