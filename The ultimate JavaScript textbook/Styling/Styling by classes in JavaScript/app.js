// Дано абзаци з числами. Переберіть ці абзаци циклом і абзаци, що містять парні числа, зафарбуйте в червоний колір, а ті, що містять непарні, - у зелений.

let paragraphs = document.querySelectorAll('p');
for (let elem of paragraphs) {
    let number = Number(elem.textContent);
    if (number % 2 === 0) {
        elem.style.color = 'red';
    } else {
        elem.style.color = 'green';
    }
}
