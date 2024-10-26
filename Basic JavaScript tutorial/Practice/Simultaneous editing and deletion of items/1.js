// Додайте посилання на видалення в кінець кожного абзацу. Зробіть так, щоб за кліком на span у ньому з'являвся інпут для редагування.

let elems = document.querySelectorAll('p');

for (let elem of elems) {
    let deletLink = document.createElement('a');
    deletLink.href = '#';
    deletLink.textContent = 'remove';
    deletLink.style.marginLeft = '10px';
    deletLink.addEventListener('click', function (e) {
        e.preventDefault();
        elem.remove();
    });
    elem.appendChild(deletLink);

    let spans = document.querySelectorAll('span');
    for (let span of spans) {
        span.addEventListener('click', function () {
            let input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            span.replaceWith(input);
            input.focus();
            input.addEventListener('blur', function () {
                span.textContent = input.value;
                input.replaceWith(span);
            });
            // Обробка натискання Enter

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    span.textContent = input.value;
                    input.replaceWith(span);
                }
            });
        });
    }
}
