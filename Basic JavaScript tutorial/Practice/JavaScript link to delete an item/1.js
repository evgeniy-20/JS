// Самостійно, не підглядаючи в мій код, розв'яжіть описане завдання.

let elem = document.querySelector('.elem');
let remove = document.querySelector('.remove');

remove.addEventListener('click', function (event) {
    if (elem) {
        elem.remove();
    }
    event.preventDefault();
});
