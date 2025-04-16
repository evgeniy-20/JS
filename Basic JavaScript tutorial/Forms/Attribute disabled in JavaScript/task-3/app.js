// Дано інпут і кнопку. Після натискання на кнопку дізнайтеся, заблокований інпут чи ні.

let name = document.querySelector('#name');
let blocked = document.querySelector('#blocked');

blocked.addEventListener('click', function () {
    if (name.disabled) {
        console.log('заблоковано')
    } else {
        console.log('розблоковано')
    }
})
