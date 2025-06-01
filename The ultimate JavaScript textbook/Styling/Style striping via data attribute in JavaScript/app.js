// Дано інпут. Після втрати фокусу перевірте введене в нього число. Якщо це число до десяти, то пофарбуйте інпут у зелений колір, якщо від десяти до двадцяти - у жовтий, а якщо понад двадцять - у червоний.

const input = document.getElementById('numberInput');

input.addEventListener('blur', function () {
    const value = Number(input.value);

    if (isNaN(value)) {
        input.dataset.color = '';  // очищаємо data-атрибут, якщо не число
        input.style.border = '2px solid gray';
        return;
    }

    if (value < 10) {
        input.dataset.color = 'green';
    } else if (value >= 10 && value <= 20) {
        input.dataset.color = 'yellow';
    } else {
        input.dataset.color = 'red';
    }

    // Фарбуємо рамку на основі data-color
    input.style.border = `2px solid ${input.dataset.color}`;
});
