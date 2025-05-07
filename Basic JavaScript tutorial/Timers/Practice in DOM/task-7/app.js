// Дано абзац. Зробіть так, щоб щосекунди він змінював свій колір із червоного на зелений і навпаки.

let restColor = document.querySelector('#restColor');
restColor.style.color = 'red';

setInterval(() => {
    if (restColor.style.color === 'red') {
        restColor.style.color = 'green';
    } else {
        restColor.style.color = 'red';
    }
}, 1000);
