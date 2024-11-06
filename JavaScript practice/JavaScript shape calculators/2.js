// Зробіть калькулятор, який знаходитиме площу та периметр прямокутника.

function calculator() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (length <= 0 || width <= 0 || isNaN(length) || isNaN(width)) {
        alert('Довжина і ширина повинні бути числом більшим за нуль.');
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById('result').innerHTML = 
        `Площа: ${area} <br> Периметр: ${perimeter}`;
}
