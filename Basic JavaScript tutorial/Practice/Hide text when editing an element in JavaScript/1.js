// Самостійно, не підглядаючи в мій код, розв'яжіть описане завдання.

let elem = document.querySelector('#elem');
elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    elem.textContent = '';
    input.value = elem.textContent;
    elem.appendChild(input);
    input.addEventListener('blur', function () {
        elem.textContent = this.value;
        elem.addEventListener('click', func);
    })
    elem.removeEventListener('click', func);
})
