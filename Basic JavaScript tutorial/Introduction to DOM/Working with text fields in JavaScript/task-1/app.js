// Дано інпут і кнопку. Після натискання на кнопку запишіть в інпут який-небудь текст.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.value = 'Kristina'
})
