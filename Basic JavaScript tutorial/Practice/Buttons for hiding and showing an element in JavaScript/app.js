// Модифікуйте мій код так, щоб була тільки одна кнопка. Нехай за першим кліком на цю кнопку елемент показується, а за другим - ховається.

let button = document.querySelector('.button');
let element = document.querySelector('.elem');
button.addEventListener('click', function () {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    } else {
        element.classList.add('hide');
    }
})
