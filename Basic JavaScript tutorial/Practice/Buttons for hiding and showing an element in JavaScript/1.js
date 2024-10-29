// Модифікуйте мій код так, щоб була тільки одна кнопка. Нехай за першим кліком на цю кнопку елемент показується, а за другим - ховається.

let elem = document.querySelector('#elem');
let hide = document.querySelector('#hide');
hide.addEventListener('click', function () {
    elem.classList.toggle('hidden');
})
