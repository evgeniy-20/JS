// Дано інпут і дві кнопки. Нехай натискання на першу кнопку блокує інпут, а натискання на другу - відблоковує.

let name = document.querySelector('#name');
let blocked = document.querySelector('#blocked');
let unblocked = document.querySelector('#unblocked');
blocked.addEventListener('click', function () {
    name.disabled = true;
})
unblocked.addEventListener('click', function () {
    name.disabled = false;
})
