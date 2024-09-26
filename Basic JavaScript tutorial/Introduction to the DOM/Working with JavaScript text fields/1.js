// Даний інпут та кнопка. Натиснувши кнопку, запишіть в інпут який-небудь текст.
let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    input.value = 'passholder';
});
