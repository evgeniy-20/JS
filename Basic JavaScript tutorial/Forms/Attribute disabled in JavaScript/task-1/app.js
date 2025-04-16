// Дано інпут і кнопку. Після натискання на кнопку заблокуйте інпут.

let name = document.querySelector('#name');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    name.disabled = true;
})
