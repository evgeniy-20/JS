// Дано абзац. Зробіть так, щоб кожну секунду він змінював свій колір із червоного на зелений і навпаки.

let text = document.querySelector('#text');
let isRed = true;
setInterval(() => {
    if (isRed) {
        text.style.color = 'green';
    } else {
        text.style.color = 'red';
    }
    isRed = !isRed;
}, 1000);
